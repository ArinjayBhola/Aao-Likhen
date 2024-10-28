import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const DraftPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      return navigate("/signin");
    }
  });

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const postBlog = async () => {
    if (!title || !description) {
      alert(
        `Please add a${!title ? " title" : ""}${
          !title && !description ? " and" : ""
        }${!description ? " description" : ""}`,
      );
      return;
    }
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content: description,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white">
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
              setdescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mt-3 ">
          <button
            type="submit"
            className="text-white shadow-md bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={postBlog}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DraftPage;
