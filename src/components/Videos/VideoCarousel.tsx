export function VideoCarousel({ videos }: { videos: [] }) {
  return (
    <div>
      {videos.map((video: any) => {
        return <div key={video.id}>{video.title}</div>;
      })}
    </div>
  );
}
