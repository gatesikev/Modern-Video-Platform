import { useQuery } from "@tanstack/react-query";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = ({ selectedCategory }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["feed", selectedCategory],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${selectedCategory}&type=video`),
  });

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 p-4 md:p-6 pb-24 md:pb-6">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
          <span className="text-red-500">{selectedCategory}</span> Videos
        </h2>

        {isLoading && <Loader />}

        {isError && (
          <div className="text-center mt-20">
            <p className="text-red-500 text-xl font-bold">Oops! Something went wrong.</p>
            <p className="text-[#aaaaaa] mt-2">API limit may have been reached. Try again later.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {data?.items?.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;