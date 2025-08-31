
export const courses = [
  { id: 1, slug: 'digital-literacy-101', title: 'Digital Literacy 101', level: 'Beginner',
    summary: 'Create email, stay safe online, and get started with Word/Excel basics.' },
  { id: 2, slug: 'coding-basics', title: 'Coding Basics', level: 'Beginner',
    summary: 'What is code, variables, and your first HTML page.' }
];

// Use MDN sample video as dummy media to ensure it plays without shipping binaries
const SAMPLE = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

export const lessons = [
  { id: 1, courseId: 1, slug: 'create-email', title: 'How to Create an Email Account',
    videoUrl: SAMPLE, avatarUrl: SAMPLE, captionsUrl: '/captions/create-email.vtt',
    transcriptUrl: '/transcripts/create-email.txt', duration: '5:00',
    quiz: { question: 'Which platform can you use to create a new email account?',
            options: ['Gmail or Outlook', 'YouTube', 'Facebook'], answerIndex: 0 } },
  { id: 2, courseId: 1, slug: 'online-safety', title: 'Online Safety Basics',
    videoUrl: SAMPLE, avatarUrl: SAMPLE, captionsUrl: '/captions/online-safety.vtt',
    transcriptUrl: '/transcripts/online-safety.txt', duration: '4:30',
    quiz: { question: 'One way to stay safe online is to:',
            options: ['Use strong, unique passwords', 'Share personal info', 'Click unknown links'],
            answerIndex: 0 } },
  { id: 3, courseId: 2, slug: 'what-is-code', title: 'What Is Code?',
    videoUrl: SAMPLE, avatarUrl: SAMPLE, captionsUrl: '/captions/what-is-code.vtt',
    transcriptUrl: '/transcripts/what-is-code.txt', duration: '3:00',
    quiz: { question: 'Code is:',
            options: ['A set of instructions for a computer', 'A puzzle', 'A robot'],
            answerIndex: 0 } },
  { id: 4, courseId: 2, slug: 'variables', title: 'Understanding Variables',
    videoUrl: SAMPLE, avatarUrl: SAMPLE, captionsUrl: '/captions/variables.vtt',
    transcriptUrl: '/transcripts/variables.txt', duration: '4:00',
    quiz: { question: 'What can a variable hold?', options: ['A value/data', 'Nothing', 'Only images'], answerIndex: 0 } },
  { id: 5, courseId: 2, slug: 'first-html', title: 'Your First HTML Page',
    videoUrl: SAMPLE, avatarUrl: SAMPLE, captionsUrl: '/captions/first-html.vtt',
    transcriptUrl: '/transcripts/first-html.txt', duration: '6:15',
    quiz: { question: 'Which tag starts an HTML document?',
            options: ['<html>', '<body>', '<head>'], answerIndex: 0 } },
];
