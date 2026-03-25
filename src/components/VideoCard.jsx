import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const { title, channelTitle, thumbnails, channelId } = snippet;

  const videoId = id?.videoId || id;

  if (!videoId) return null;

  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      {/* Thumbnail */}
      <Link to={`/video/${videoId}`}>
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={thumbnails?.high?.url}
            alt={title}
            className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="flex gap-3 px-1">
        {/* Channel Avatar */}
        <Link to={`/channel/${channelId}`}>
          <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
            {channelTitle?.charAt(0)}
          </div>
        </Link>

        {/* Title & Channel */}
        <div className="flex flex-col gap-1">
          <Link to={`/video/${videoId}`}>
            <h3 className="text-white text-sm font-medium line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </Link>
          <Link to={`/channel/${channelId}`}>
            <p className="text-[#aaaaaa] text-xs hover:text-white transition-colors">
              {channelTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;