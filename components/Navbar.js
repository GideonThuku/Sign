
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { pathname } = useRouter();
  const link = (href, label) => (
    <Link href={href}><a className={pathname === href || pathname.startsWith(href + '/') ? 'font-bold underline' : 'hover:underline'}>{label}</a></Link>
  );
  return (
    <nav aria-label="Main navigation">
      <ul className="flex gap-4">
        <li>{link('/', 'Home')}</li>
        <li>{link('/courses', 'Courses')}</li>
        <li>{link('/cv-builder', 'CV Builder')}</li>
        <li>{link('/interview-tips', 'Interview Tips')}</li>
        <li>{link('/jobs', 'Jobs')}</li>
      </ul>
    </nav>
  );
}
