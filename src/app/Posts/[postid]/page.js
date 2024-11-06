import Link from "next/link";
import Image from "next/image";
import path from "path";
import fs from "fs";

// Function to load JSON data
const loadPosts = () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
};

// Generate Static Paths equivalent in App Router
export async function generateStaticParams() {
  const posts = loadPosts();

  return posts.map(post => ({
    postid: post.id.toString(),
  }));
}

export default function BlogPost({ params }) {
  const posts = loadPosts();
  const post = posts.find(post => post.id.toString() === params.postid);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
   
      

      <main className="flex-1 container mx-auto px-4 py-8" style={{ margin: "3rem" }}>
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          Back to Blog
        </Link>
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <Image src={post.thumbnail} alt="Blog post cover" width={1200} height={600} className="img-rounded mb-8" />
          <div className="prose dark:prose-invert">
            <p>{post.description}</p>
          </div>
        </article>
      </main>

     
    
  );
}
