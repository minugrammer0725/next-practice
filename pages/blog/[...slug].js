import { useRouter } from "next/router";

// catch-all routes.

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
