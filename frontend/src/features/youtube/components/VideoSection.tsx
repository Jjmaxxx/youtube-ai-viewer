import VideoCard from './VideoCard';
import type { ScrapedChannelVideoData } from '@/features/youtube/lib/types';
interface Props {
  title: string;
  videos: ScrapedChannelVideoData[];
  onCardClick: (id: string) => void;
}

export default function VideoSection({ title, videos, onCardClick }: Props) {
  return (
    <div className='mt-8'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}
