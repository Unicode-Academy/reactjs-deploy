import React, { useEffect, useState } from "react";
import getBlogs from "../helpers/getBlogs";
import { Link, NavLink, useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams] = useSearchParams();
  const [blogs, setBlogs] = useState({
    data: [],
    max_page: 0,
  });
  const page = searchParams.get("page") || 1;
  useEffect(() => {
    getBlogs({}, page).then((data) => setBlogs(data));
    window.scrollTo(0, 0);
  }, [searchParams]);
  if (!blogs.data.length) return <span>Loading...</span>;
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Blogs - Unicode</h1>
      </header>
      <ul>
        {blogs.data.map((blog) => (
          <li key={blog.blog_id} className="mb-2">
            <Link to={`/${blog.blog_id}`}>
              {blog.title}
              <img src={blog.image_url} width={400} />
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex pb-4">
        {Array.from({ length: blogs.max_page }, (_, i) => (
          <NavLink to={`?page=${i + 1}`} className={`btn`} key={i}>
            {i + 1}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
