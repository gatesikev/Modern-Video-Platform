import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";
import ChannelCard from "../components/ChannelCard";

const SearchResults = () => {
  const { query } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${query}`),
  });

  if (isLoading) return <Loader />;

  if (isError) return (
    <div className="text-center mt-20">
      <p className="text-red-500 text-xl font-bold">Oops! Something went wrong.</p>
      <p className="text-[#aaaaaa] mt-2">Try searching for something else.</p>
    </div>
  );

  return (
    <div className="p-6">
      <h2 className="text-white text-xl font-bold mb-6">
        Search results for: <span className="text-red-500">"{query}"</span>
      </h2>

      <div className="flex flex-col gap-4">
        {data?.items?.map((item, idx) => (
          <div key={idx}>
            {item.id.channelId ? (
              <ChannelCard channel={item} />
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <VideoCard video={item} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;