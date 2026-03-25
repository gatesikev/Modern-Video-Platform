import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const ChannelDetails = () => {
  const { id } = useParams();

  const { data: channelData, isLoading: channelLoading } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchFromAPI(`channels?part=snippet,statistics&id=${id}`),
  });

  const { data: videosData, isLoading: videosLoading } = useQuery({
    queryKey: ["channelVideos", id],
    queryFn: () => fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&type=video`),
  });

  const channel = channelData?.items?.[0];
  const { title, description, thumbnails, country } = channel?.snippet || {};
  const { subscriberCount, videoCount, viewCount } = channel?.statistics || {};

  if (channelLoading) return <Loader />;

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="w-full h-32 sm:h-48 bg-gradient-to-r from-red-900 via-red-600 to-red-900" />

      {/* Channel Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 px-6 py-4 bg-[#0f0f0f] border-b border-[#272727]">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0f0f0f] -mt-12 shrink-0">
          {thumbnails?.high?.url ? (
            <img
              src={thumbnails.high.url}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-red-600 flex items-center justify-center text-white text-3xl font-bold">
              {title?.charAt(0)}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-1 text-center sm:text-left flex-1">
          <h1 className="text-white text-2xl font-bold">{title}</h1>
          <p className="text-[#aaaaaa] text-sm">{country}</p>
          <p className="text-[#aaaaaa] text-sm line-clamp-2">{description}</p>
        </div>

        {/* Stats */}
        <div className="flex gap-6 text-center">
          <div>
            <p className="text-white font-bold text-lg">
              {parseInt(subscriberCount || 0).toLocaleString()}
            </p>
            <p className="text-[#aaaaaa] text-xs">Subscribers</p>
          </div>
          <div>
            <p className="text-white font-bold text-lg">
              {parseInt(videoCount || 0).toLocaleString()}
            </p>
            <p className="text-[#aaaaaa] text-xs">Videos</p>
          </div>
          <div>
            <p className="text-white font-bold text-lg">
              {parseInt(viewCount || 0).toLocaleString()}
            </p>
            <p className="text-[#aaaaaa] text-xs">Views</p>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="p-6">
        <h2 className="text-white text-xl font-bold mb-6">Latest Videos</h2>
        {videosLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videosData?.items?.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelDetails;