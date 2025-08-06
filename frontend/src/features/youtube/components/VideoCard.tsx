import type { PartialVideoWithId } from '@/features/youtube/lib/types';
interface Props {
  video: PartialVideoWithId;
  onClick: (id: string) => void;
}

function VideoCard({ video, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(video.id)}
      className='cursor-pointer text-left border rounded-md p-4 hover:shadow transition bg-white'
    >
      <img src={video.thumbnail} alt={video.title} className='w-full mb-2 rounded' />
      <h3 className='text-md font-semibold'>{video.title}</h3>
      <p className='text-sm text-gray-500'>
        {video.published_time} — {video.length}
      </p>
    </div>
  );
}

export default VideoCard;
