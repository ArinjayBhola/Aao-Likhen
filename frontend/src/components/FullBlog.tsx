import { BlogType } from "../hooks";
import AppBar from "./AppBar";

const FullBlog = ({ blog }: { blog: BlogType }) => {
  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-12 px-10 py-5">
        <div className="col-span-8">
          <div className="text-3xl font-bold mb-2">{blog.title}</div>
          <div className="text-gray-600 mb-4">dd-mm-yyyy</div>
          <div className="prose">
            <p>{blog.content}</p>
          </div>
        </div>
        <div className="col-span-4 pl-4 border-l border-gray-200">
          <div className="text-lg font-bold mb-2">{blog.author.name || "Anonymous"}</div>
          <div className="text-gray-700">
            <div className="text-xl font-semibold">Jokester</div>
            <div>Master of mirth, purveyor of puns, and the funniest person in the kingdom.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
