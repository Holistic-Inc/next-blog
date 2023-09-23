import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-2">
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="mb-4 text-center text-xl ">
          Read{" "}
          <Link
            className="no-underline hover:text-blue-700"
            href="/posts/first-post"
          >
            this page!
          </Link>
        </h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-current"
        >
          Powered by{" "}
          <span className="ml-2">
            <Image
              className="fill-white"
              width={70}
              height={100}
              src="/vercel.svg"
              alt={"sdf"}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
