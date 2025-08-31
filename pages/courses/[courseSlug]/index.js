
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { courses, lessons } from '../../../lib/data';

export async function getStaticPaths() {
  return { paths: courses.map(c => ({ params: { courseSlug: c.slug } })), fallback: false };
}
export async function getStaticProps({ params }) {
  const course = courses.find(c => c.slug === params.courseSlug) || null;
  const courseLessons = course ? lessons.filter(l => l.courseId === course.id) : [];
  return { props: { course, courseLessons } };
}

export default function CoursePage({ course, courseLessons }) {
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('progress') || '[]');
    setCompleted(stored);
  }, []);

  const items = useMemo(() => courseLessons, [courseLessons]);

  if (!course) return <div className="p-4">Course not found.</div>;

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
      <p className="mb-4 text-gray-700">{course.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Lessons:</h2>
      <ul>
        {items.map((lesson) => (
          <li key={lesson.id} className="mb-2">
            <Link href={`/courses/${course.slug}/${lesson.slug}`}><a className="text-blue-600 hover:underline">{lesson.title}</a></Link>
            {completed.includes(lesson.id) && <span className="text-sm text-green-600 ml-2">(completed)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
