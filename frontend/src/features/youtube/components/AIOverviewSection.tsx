import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { post } from '@/lib/api';
import SectionHeader from '@/components/shared/SectionHeader';
import type { VideoDetailsResponse, AIResponse } from '@/features/youtube/lib/types';

interface Props {
  details: VideoDetailsResponse;
}

export default function AIOverviewSection({ details }: Props) {
  const [expanded, setExpanded] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAiOverview = async () => {
      setLoading(true);
      try {
        const res = await post<AIResponse>('/analyze/video', { ...details });
        setMessage(res.message);
      } catch (err) {
        console.error('AI overview failed:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAiOverview();
  }, [details]);

  return (
    <div className='border-t pt-4'>
      <SectionHeader
        title='AI Overview'
        expanded={expanded}
        toggle={() => setExpanded((p) => !p)}
      />
      {expanded && (
        <div className='bg-gray-100 rounded p-3 max-h-[40vh] overflow-y-auto text-sm mt-2'>
          {loading ? (
            <div className='flex justify-center items-center h-full'>
              <Loader2 className='w-5 h-5 animate-spin' />
            </div>
          ) : message ? (
            <p className='whitespace-pre-wrap'>{message}</p>
          ) : (
            <p className='text-gray-500'>No overview available.</p>
          )}
        </div>
      )}
    </div>
  );
}
