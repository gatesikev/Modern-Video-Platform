import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetch";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const Feed = ({ selected }) => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos", selected],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${selected}`)
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading videos</p>;

  return (
    <div>
      <h2>{selected} Videos</h2>

      <div className="videos">
        {data?.items
          ?.filter((item) => item.id.videoId)
          .map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
      </div>
    </div>
  );
};

export default Feed;