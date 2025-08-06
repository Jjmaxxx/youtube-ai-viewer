import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FullPageLoader from '@/components/shared/FullPageLoader';
import { post } from '@/lib/api';
import { useNavigate } from 'react-router-dom';
import type { ScrapedChannelData } from '@/features/youtube/lib/types';

export default function ChannelSearch() {
  const [channelId, setChannelId] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!channelId) return;
    setLoading(true);

    try {
      const data = await post<ScrapedChannelData, { channel_id: string }>('/channel/scrape', {
        channel_id: channelId.trim(),
      });
      navigate(`/channel/${channelId}`, { state: { data } });
    } catch (err) {
      console.error('POST failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-xl mx-auto text-center mt-20 space-y-6'>
      {loading && <FullPageLoader overlay />}
      <h1 className='text-3xl font-bold'>YouTube Channel Analyzer</h1>
      <p className='text-gray-600'>Input your YouTube Channel ID below</p>

      <div className='flex items-center space-x-2'>
        <Input
          type='text'
          placeholder='e.g. kurzgesagt, AsapSCIENCE'
          value={channelId}
          onChange={(e) => setChannelId(e.target.value)}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          Submit
        </Button>
      </div>
    </div>
  );
}
