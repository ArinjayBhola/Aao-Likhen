const BlogCardSkeleton = () => {
  return (
    <>
      <div className="max-w-sm animate-pulse">
        <div className="flex justify-center items-center">
          <div className="p-4 rounded-lg bg-white w-3/4">
            <div className="flex items-center mb-4">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="ml-3">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              </div>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="bg-slate-200 h-1 w-full mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCardSkeleton;
