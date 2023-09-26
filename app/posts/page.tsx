import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

async function getPosts() {
  return getSortedPostsData();
}

// only to test loading state
async function retuningPromiseWithSomeTimeout() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      resolve(await getPosts());
    }, 2000);
  });
}

export default async function FirstPost() {
  const posts = await retuningPromiseWithSomeTimeout();

  return (
    <div>
      {(posts as any).map((post: any) => (
        <article className="pb-10" key={post.id}>
          <Link
            className="no-underline hover:text-blue-700"
            href={`/posts/${post.id}`}
          >
            <h1>{post.title}</h1>
          </Link>
          <small className="text-gray-400">{post.date}</small>
        </article>
      ))}
    </div>
  );
}
