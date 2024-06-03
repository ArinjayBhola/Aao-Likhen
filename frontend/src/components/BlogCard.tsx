import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

const BlogCard = ({ authorName, title, content, publishedDate, id }: BlogCardProps) => {
  const readingTime = Math.ceil(content.length / 100);

  return (
    <Link to={`/blog/${id}`}>
      <div className="flex justify-center">
        <div className="p-4 rounded-lg bg-white w-3/4">
          <div className="flex items-center mb-4">
            <Avatar name={authorName} />
            <div className="ml-3">
              <div className="text-gray-900 font-medium">{authorName}</div>
              <div className="text-gray-500">{publishedDate}</div>
            </div>
          </div>
          <div className="text-xl font-bold mb-2">{title}</div>
          <div className="text-gray-700 mb-4">{content.slice(0, 100) + "..."}</div>
          <div className="text-gray-500 text-sm">{readingTime} min read</div>
          <div className="bg-slate-200 h-1 w-full mt-2"></div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
      <span className="font-medium text-gray-600">{name[0]}</span>
    </div>
  );
}
