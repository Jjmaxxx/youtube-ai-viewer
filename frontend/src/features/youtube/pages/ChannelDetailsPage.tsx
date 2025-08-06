import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import VideoDetailsModal from '../components/VideoDetailsModal';
import ChannelHeader from '../components/ChannelHeader';
import VideoSection from '../components/VideoSection';
import type { ScrapedVideoSection } from '@/features/youtube/lib/types';
export default function ChannelDetailsPage() {
  const { state } = useLocation();
  const { data } = state || {};
  const { id } = useParams();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  if (!data) return <div className='text-center mt-20'>No data available.</div>;

  const {
    about: { description, subscribers, videos },
    videos_sections,
  } = data;

  const openModal = (videoId: string) => {
    setSelectedVideoId(videoId);
    setModalOpen(true);
  };

  return (
    <div className='max-w-4xl mx-auto mt-12 space-y-6'>
      <ChannelHeader
        channelId={id || ''}
        description={description}
        videos={videos}
        subscribers={subscribers}
      />

      {videos_sections.map((section: ScrapedVideoSection, idx: number) => (
        <VideoSection
          key={idx}
          title={section.section_title}
          videos={section.videos}
          onCardClick={openModal}
        />
      ))}

      {selectedVideoId && (
        <VideoDetailsModal videoId={selectedVideoId} open={modalOpen} onOpenChange={setModalOpen} />
      )}
    </div>
  );
}
