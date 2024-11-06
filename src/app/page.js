"use client"
import { BookOpen, Bookmark, Pen, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "../app/style/home.css";
import posts from "../../data/posts.json"; 
import { useRouter } from "next/navigation";

export default function BlogLandingPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="header">
        <Link href="#">
          <BookOpen className="h-6 w-6" />
          <span className="sr-only">Acme Blogs</span>
        </Link>
        <nav className="nav">
          <Link className="navLink" href="#">Home</Link>
          <Link className="navLink" href="#">Posts</Link>
          <Link className="navLink" href="#">About</Link>
          <Link className="navLink" href="#">Contact</Link>
        </nav>
      </header>

      <main className="main">
        <section className="heroSection" style={{display:"flex", justifyContent:"center"}}>
          <div className="container">
            <h1 className="heroText">Welcome to Acme Blogs</h1>
            <p className="heroDescription">
              Discover insightful articles, expert opinions, and the latest trends in technology, lifestyle, and more.
            </p>
            <form className="searchForm">
              <input className="searchInput" placeholder="Search articles" type="search" />
              <button type="submit">
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <section className="featuredPosts" style={{color:"black"}} >
          <h2 className="featuredPostsTitle">Featured Posts</h2>
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 align-ment" >
            {posts.map(post => (
              <div className="postCard" key={post.id} onClick={()=>router.push(`/Posts/${post.id}`)}>
                <Image alt="Blog post thumbnail" className="postThumbnail" src={post.thumbnail} width="400" height="200" />
                <h3 className="postTitle">{post.title}</h3>
                <p>{post.description}</p>
                <div className="flex items-center mt-4">
                  <Bookmark className="h-4 w-4 mr-2" />
                  <span>{post.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="callToAction">
          <h2>Start Your Blogging Journey</h2>
          <p>Join our community of writers and share your thoughts with the world. It's easy to get started and free to use.</p>
          <form>
            <input placeholder="Enter your email" type="email" />
            <button type="submit" >
              <Pen className="mr-2 h-4 w-4" /> 
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Acme Blogs. All rights reserved.</p>
        <nav>
          <Link href="#">Terms of Service</Link>
          <Link href="#" style={{paddingLeft:"2px"}}>Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
