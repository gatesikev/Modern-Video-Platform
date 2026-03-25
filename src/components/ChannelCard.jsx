import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  const { id, snippet } = channel;
  const { channelTitle, thumbnails, description } = snippet;
  const channelId = id?.channelId || id;

  return (
    <Link to={`/channel/${channelId}`}>
      <div className="flex items-center gap-4 p-4 bg-[#272727] rounded-xl hover:bg-[#3f3f3f] transition-colors">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
          {thumbnails?.high?.url ? (
            <img
              src={thumbnails.high.url}
              alt={channelTitle}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold">
              {channelTitle?.charAt(0)}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-bold text-lg">{channelTitle}</h3>
          <p className="text-[#aaaaaa] text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;