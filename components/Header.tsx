import Link from "next/link";

export default function Header() {
  return (
    <header className="py-14">
      <div className="container m-auto max-w-2xl px-4">
        <nav className="flex space-x-4">
          <Link className="no-underline hover:text-blue-700" href="/">
            Home
          </Link>
          <Link className=" no-underline hover:text-blue-700" href="/posts">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
