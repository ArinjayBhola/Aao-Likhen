import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import AppBar from "../components/AppBar";
import Spinner from "../components/Spinner";

const Blog = () => {
  const { id } = useParams();
  const data = useBlog({
    id: id || "",
  });
  if (data.singleBlog === undefined)
    return (
      <div>
        <AppBar />
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
