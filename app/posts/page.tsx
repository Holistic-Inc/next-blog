import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

async function getPosts() {
  return getSortedPostsData();
}

export default async function FirstPost() {
  const posts = await getPosts();

  return (
    <div className="container m-auto max-w-2xl px-4">
      <div>
        {posts.map((post) => (
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
    </div>
  );
}
