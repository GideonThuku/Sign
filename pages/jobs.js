
import { useState } from 'react';

export default function JobsPage() {
  const [query, setQuery] = useState('');

  const searchJobs = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const url = `https://www.brightermonday.co.ke/jobs?search=${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Find Jobs</h1>
      <p className="mb-4 text-gray-700">Search for jobs and explore opportunities with inclusive employers:</p>
      <form onSubmit={searchJobs} className="mb-6" role="search" aria-label="Job search">
        <label htmlFor="job-q" className="sr-only">Job search</label>
        <input id="job-q" type="text" placeholder="Job title or keyword" value={query} onChange={e => setQuery(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-l w-64" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">Search</button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Quick Links:</h2>
      <ul className="list-disc list-inside mb-6">
        <li><a href="https://www.brightermonday.co.ke/jobs/remote" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Remote Jobs</a></li>
        <li><a href="https://www.brightermonday.co.ke/jobs?experience=entry-level" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Entry-Level Jobs</a></li>
        <li><a href="https://www.brightermonday.co.ke/jobs/it-telecoms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IT & Telecoms Jobs</a></li>
        <li><a href="https://www.brightermonday.co.ke/jobs/creative-design" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Creative & Design Jobs</a></li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Tips for Finding Inclusive Employers:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Look for companies that mention accessibility and inclusion on their careers page.</li>
        <li>Consider remote or flexible roles that fit your needs.</li>
        <li>Ask about accommodations during hiring processes.</li>
      </ul>
    </div>
  );
}
