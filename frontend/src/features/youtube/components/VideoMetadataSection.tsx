import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import type { VideoDetailsResponse } from '@/features/youtube/lib/types';

interface Props {
  video: VideoDetailsResponse['video'];
}

export default function VideoMetadataSection({ video }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='border-t pt-4'>
      <SectionHeader
        title='Video Metadata'
        expanded={expanded}
        toggle={() => setExpanded((prev) => !prev)}
      />
      {expanded && (
        <div className='mt-2 space-y-1 text-sm text-gray-700'>
          <h2 className='text-xl font-bold'>{video.title}</h2>
          <p>Channel: {video.channel_title}</p>
          <p>
            Views: {Number(video.view_count).toLocaleString()} | Likes:{' '}
            {Number(video.like_count).toLocaleString()} | Comments:{' '}
            {Number(video.comment_count).toLocaleString()}
          </p>
          <p className='text-gray-500'>
            Published: {new Date(video.published_at).toLocaleDateString()}
          </p>
          <p className='mt-2 whitespace-pre-line'>{video.description}</p>
        </div>
      )}
    </div>
  );
}
