import { getSortedPostsData } from "@/lib/posts";

async function getPosts() {
  return getSortedPostsData();
}

export async function GET() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      resolve(await getPosts());
    }, 20000);
  });
}
