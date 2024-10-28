import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { BlogType, useBlogs } from "../hooks";

const Blogs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      return navigate("/signin");
    }
  }, []);
  const [blog, setBlog] = useState<BlogType[]>([]);
  const blogData = useBlogs();
  useEffect(() => {
    setBlog(blogData.data);
  }, [blogData.data]);
  if (blogData.data.length === 0)
    return (
      <>
        <div className="flex justify-center">
          <div>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        </div>
      </>
    );
  return (
    <div>
      <div>
        {blog.map((a) => (
          <BlogCard
            key={a.id}
            authorName={a.author.name || "Anonymous"}
            title={a.title}
            content={a.content}
            publishedDate="dd-mm-yyyy"
            id={a.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
