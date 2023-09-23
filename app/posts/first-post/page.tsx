import { Metadata } from "next";
import Link from "next/link";

const title = "First post";

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    description: "Some description",
  },
};
export default function FirstPost() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-10">
      <h1>First post template</h1>|
      <h2>
        <Link className="italic no-underline hover:text-blue-700" href="/">
          Back to home
        </Link>
      </h2>
    </div>
  );
}
