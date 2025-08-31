
import Link from 'next/link';

export default function Home() {
  return (
    <section className="px-4 py-10 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Welcome to Sign-to-Code</h1>
      <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
        An accessible mini‑LMS with sign‑language support, captions, transcripts, and simple UI.
      </p>
      <div className="flex flex-col md:flex-row md:justify-center gap-4">
        <Link href="/courses"><a className="bg-blue-600 text-white px-5 py-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Start Learning</a></Link>
        <Link href="/cv-builder"><a className="bg-green-600 text-white px-5 py-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Build My CV</a></Link>
        <Link href="/jobs"><a className="bg-indigo-600 text-white px-5 py-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Find Jobs</a></Link>
      </div>
    </section>
  );
}
