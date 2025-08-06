import AIOverviewSection from './AIOverviewSection';
import VideoMetadataSection from './VideoMetadataSection';
import TranscriptSection from './TranscriptSection';
import CommentsSection from './CommentsSection';
import type { VideoDetailsResponse } from '@/features/youtube/lib/types';

interface Props {
  details: VideoDetailsResponse;
}

export default function VideoDetailsContent({ details }: Props) {
  return (
    <div className='space-y-6'>
      <AIOverviewSection details={details} />
      <VideoMetadataSection video={details.video} />
      <TranscriptSection transcript={details.transcript} />
      <CommentsSection comments={details.comments} />
    </div>
  );
}
