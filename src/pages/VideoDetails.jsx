import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const VideoDetails = () => {
  const { id } = useParams();

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchFromAPI(`videos?part=snippet,statistics&id=${id}`),
  });

  const { data: relatedData, isLoading: relatedLoading } = useQuery({
    queryKey: ["related", id],
    queryFn: () => fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`),
  });

  const video = videoData?.items?.[0];
  const { title, channelTitle, channelId, description } = video?.snippet || {};
  const { viewCount, likeCount } = video?.statistics || {};

  if (videoLoading) return <Loader />;

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
      
      {/* Left - Player + Info */}
      <div className="flex-1">
        {/* Video Player */}
       <div className="w-full rounded-xl overflow-hidden bg-black aspect-video">
  <iframe
    src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1`}
    title="YouTube video player"
    allowFullScreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    className="w-full h-full"
  />
</div>

        {/* Title */}
        <h1 className="text-white text-xl font-bold mt-4 leading-snug">
          {title}
        </h1>

        {/* Channel + Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3 pb-4 border-b border-[#272727]">
          <Link
            to={`/channel/${channelId}`}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              {channelTitle?.charAt(0)}
            </div>
            <span className="text-white font-medium hover:text-red-500 transition-colors">
              {channelTitle}
            </span>
          </Link>

          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="bg-[#272727] px-4 py-2 rounded-full text-white text-sm">
              👍 {parseInt(likeCount || 0).toLocaleString()} Likes
            </div>
            <div className="bg-[#272727] px-4 py-2 rounded-full text-white text-sm">
              👁️ {parseInt(viewCount || 0).toLocaleString()} Views
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 bg-[#272727] rounded-xl p-4">
          <p className="text-[#aaaaaa] text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Right - Related Videos */}
      <div className="lg:w-[380px] flex flex-col gap-4">
        <h2 className="text-white font-bold text-lg">Related Videos</h2>
        {relatedLoading ? (
          <Loader />
        ) : (
          relatedData?.items?.map((video, idx) => (
            <VideoCard key={idx} video={video} />
          ))
        )}
      </div>

    </div>
  );
};

export default VideoDetails;