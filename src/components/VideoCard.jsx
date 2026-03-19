import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;
  const snippet = video?.snippet;

  return (
    <div className="video-card">
      <img
        src={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        className="thumbnail"
      />

      <div className="video-info">
        <h4>{snippet?.title}</h4>
        <p>{snippet?.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;