import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { UserBlogType, useUserBlog } from "../hooks";

const MyBlog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      return navigate("/signin");
    }
  }, []);
  const [blog, setBlog] = useState<UserBlogType[]>([]);
  const blogData = useUserBlog();
  useEffect(() => {
    setBlog(blogData);
  }, [blogData]);
  if (blogData.length === 0)
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
          <div key={a.id}>
            {a.post.map((b: { title: string; content: string; id: string }) => (
              <BlogCard
                key={b.title}
                authorName={a.name || "Anonymous"}
                title={b.title}
                content={b.content}
                publishedDate="dd-mm-yyyy"
                id={b.id}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
