import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import Spinner from "../components/Spinner";
import { useBlog } from "../hooks";

const Blog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      return navigate("/signin");
    }
  }, []);
  const { id } = useParams();
  const data = useBlog({
    id: id || "",
  });
  if (data.singleBlog === undefined)
    return (
      <div>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  return <div>{data.singleBlog && <FullBlog blog={data.singleBlog} />}</div>;
};

export default Blog;
