import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { post } from '@/lib/api';
import { Loader2 } from 'lucide-react';
import type { VideoDetailsResponse } from '@/features/youtube/lib/types';
import VideoDetailsContent from './VideoDetailsContent';

export interface VideoModalProps {
  videoId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export default function VideoDetailsModal({ videoId, open, onOpenChange }: VideoModalProps) {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<VideoDetailsResponse | null>(null);

  useEffect(() => {
    if (!open) return;
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const data = await post<VideoDetailsResponse, { video_id: string }>('/video/video_details', {
          video_id: videoId,
        });
        setDetails(data);
      } catch (err) {
        console.error('Failed to fetch video details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [videoId, open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto [&>button]:hidden custom-dialog'>
        <DialogHeader>
          <DialogTitle>Video Details</DialogTitle>
          <DialogDescription>
            Fetched using Google's YouTube API & YouTubeTranscriptAPI
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className='flex justify-center items-center py-12'>
            <Loader2 className='w-6 h-6 animate-spin' />
          </div>
        ) : details ? (
          <VideoDetailsContent details={details} />
        ) : (
          <p className='text-red-500 text-sm'>Failed to load video details.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
