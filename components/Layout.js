
import Navbar from './Navbar';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <Link href="/"><a className="text-lg font-bold">Sign-to-Code</a></Link>
        <Navbar />
      </header>
      <main id="main-content" tabIndex="-1" className="min-h-[70vh]">{children}</main>
      <footer className="bg-gray-100 text-gray-600 text-center p-4 text-sm">
        © 2025 Sign-to-Code
      </footer>
    </>
  );
}
