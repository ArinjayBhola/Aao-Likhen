import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"}>
        <div className="font-bold mt-2">Aao Likhen</div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            New
          </button>
        </Link>
        <Avatar name="Aromkaur" />
      </div>
    </div>
  );
};

export default AppBar;
