import axios from "axios";
import AppBar from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DraftPage = () => {
  const [title, setTitle] = useState("");
  const [descritipion, setDescritipion] = useState("");
  const navigate = useNavigate();

  const postBlog = async () => {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title,
        content: descritipion,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    );
    navigate(`/blog/${response.data.id}`);
  };
  return (
    <div className="bg-white">
      <AppBar />
      <div className="max-w-4xl mx-auto p-4 flex flex-col justify-between m-7">
        <div className="p-6 rounded-lg shadow-md flex-grow">
          <input
            type="text"
            placeholder="Title"
            className="w-full text-4xl focus:outline-none mb-4 border-b-4 pb-3"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Tell your story..."
            className="w-full text-xl focus:outline-none h-64"
            onChange={(e) => {
              setDescritipion(e.target.value);
            }}></textarea>
        </div>
        <div className="mt-3 ">
          <button
            type="submit"
            className="text-white shadow-md bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={postBlog}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default DraftPage;
