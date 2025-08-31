
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { courses, lessons } from '../../../lib/data';

// Dynamically import the avatar video (perf: reduce initial JS)
const AvatarVideo = dynamic(() => import('../../../components/lesson/AvatarVideo'), { ssr: false });

export async function getStaticPaths() {
  const paths = [];
  for (const c of courses) {
    for (const l of lessons.filter(x => x.courseId === c.id)) {
      paths.push({ params: { courseSlug: c.slug, lessonSlug: l.slug } });
    }
  }
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const course = courses.find(c => c.slug === params.courseSlug) || null;
  const lesson = course ? lessons.find(l => l.courseId === course.id && l.slug === params.lessonSlug) : null;
  const courseLessons = course ? lessons.filter(l => l.courseId === course.id).sort((a,b) => a.id - b.id) : [];
  const idx = lesson ? courseLessons.findIndex(l => l.id === lesson.id) : -1;
  const nextLesson = idx >= 0 && idx < courseLessons.length - 1 ? { slug: courseLessons[idx+1].slug, title: courseLessons[idx+1].title } : null;
  return { props: { course, lesson, nextLesson } };
}

export default function LessonPage({ course, lesson, nextLesson }) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [rate, setRate] = useState(1);
  const vidRef = useRef(null);

  useEffect(() => {
    fetch(lesson.transcriptUrl).then(r => r.text()).then(setTranscript).catch(() => setTranscript('Transcript unavailable.'));
  }, [lesson.transcriptUrl]);

  const submit = (e) => {
    e.preventDefault();
    if (selected === null) return setFeedback('Please select an answer.');
    const correct = selected === lesson.quiz.answerIndex;
    if (correct) {
      const prog = JSON.parse(localStorage.getItem('progress') || '[]');
      if (!prog.includes(lesson.id)) {
        prog.push(lesson.id);
        localStorage.setItem('progress', JSON.stringify(prog));
      }
      setFeedback('Correct! ' + (nextLesson ? '' : 'You finished the course 🎉'));
    } else setFeedback('Incorrect, try again.');
  };

  const setSpeed = (e) => {
    const r = parseFloat(e.target.value);
    setRate(r);
    if (vidRef.current) vidRef.current.playbackRate = r;
  };

  return (
    <div className="px-4 py-6">
      <nav className="mb-4">
        <Link href={`/courses/${course.slug}`}><a className="text-sm text-blue-600 hover:underline">← Back to {course.title}</a></Link>
      </nav>

      <h1 className="text-xl font-bold mb-2">{lesson.title}</h1>
      <p className="text-gray-600 mb-4">Duration: {lesson.duration}</p>

      <div className="md:flex md:items-start gap-6 mb-4">
        <div className="md:w-2/3">
          <video ref={vidRef} controls src={lesson.videoUrl} className="w-full mb-2" crossOrigin="anonymous">
            <track src={lesson.captionsUrl} kind="captions" srcLang="en" label="English" default />
          </video>
          <div className="flex items-center gap-4 mb-2">
            <button onClick={() => setShowTranscript(!showTranscript)} className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
            </button>
            <label className="text-sm">Playback speed:
              <select value={rate} onChange={setSpeed} className="ml-1 p-1 border rounded">
                <option value="0.5">0.5x</option><option value="1">1x</option>
                <option value="1.5">1.5x</option><option value="2">2x</option>
              </select>
            </label>
          </div>
        </div>
        <div className="md:w-1/3">
          <p className="text-sm font-semibold mb-1">KSL Avatar:</p>
          <AvatarVideo src={lesson.avatarUrl} />
        </div>
      </div>

      {showTranscript && <div className="mb-6 p-4 bg-gray-100 rounded text-gray-800 whitespace-pre-wrap">{transcript}</div>}

      <div className="mt-8 pt-4 border-t border-gray-300">
        <h2 className="text-lg font-semibold mb-3">Quiz:</h2>
        <form onSubmit={submit}>
          <p className="mb-3">{lesson.quiz.question}</p>
          <div className="mb-4">
            {lesson.quiz.options.map((opt, i) => (
              <label key={i} className="block mb-1">
                <input type="radio" name="answer" value={i} checked={selected === i} onChange={() => setSelected(i)} className="mr-2" />
                {opt}
              </label>
            ))}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Check Answer
          </button>
        </form>
        {feedback && <p className="mt-3 text-sm font-semibold" aria-live="polite">{feedback}</p>}
        {nextLesson ? (
          <div className="mt-6">
            <Link href={`/courses/${course.slug}/${nextLesson.slug}`}><a className="text-blue-600 hover:underline">Next Lesson: {nextLesson.title} »</a></Link>
          </div>
        ) : (
          <div className="mt-6">
            <Link href="/courses"><a className="text-blue-600 hover:underline">Back to Courses</a></Link>
          </div>
        )}
      </div>
    </div>
  );
}
