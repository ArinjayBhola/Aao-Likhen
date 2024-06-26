import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface BlogType {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}

export interface UserBlogType {
  email: string;
  id: string;
  name: string;
  post: {
    map(
      arg0: (b: { title: string; content: string; id: string }) => import("react/jsx-runtime").JSX.Element,
    ): import("react").ReactNode;
    authorId: string;
    content: string;
    id: string;
    title: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const [singleBlog, setSingleBlog] = useState<BlogType>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setSingleBlog(res.data.blog);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    singleBlog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BlogType[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.blog);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    data,
  };
};

export const useUserBlog = () => {
  const [data, setData] = useState<UserBlogType[]>([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/myblog`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return data;
};
