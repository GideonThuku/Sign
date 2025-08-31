
import Link from 'next/link';
import { courses } from '../../lib/data';

export default function CoursesPage() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <li key={course.id} className="border rounded-lg p-4 hover:shadow">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{course.summary}</p>
            <p className="text-sm text-gray-500 mb-2">Level: {course.level}</p>
            <Link href={`/courses/${course.slug}`}><a className="text-blue-600 hover:underline">View Course »</a></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
