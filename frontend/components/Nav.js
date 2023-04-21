import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/resume">Resume</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
