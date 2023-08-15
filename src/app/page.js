import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold my-10 text-center">
        Welcome to Our Blog
      </h1>
      <div className="text-xl font-bold text-center">
        <p>Check our latest blog post</p>
        <Link href="/blog">
          <span className="text-base text-blue-600">Click here to go to Blog</span>
        </Link>
      </div>
    </>
  )
}
