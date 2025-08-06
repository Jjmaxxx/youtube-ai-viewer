import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';

interface Props {
  transcript: string;
}

export default function TranscriptSection({ transcript }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='border-t pt-4'>
      <SectionHeader
        title='Video Transcript'
        expanded={expanded}
        toggle={() => setExpanded((prev) => !prev)}
      />
      {expanded && (
        <p className='text-sm whitespace-pre-wrap bg-gray-100 p-3 rounded max-h-60 overflow-y-auto mt-2'>
          {transcript}
        </p>
      )}
    </div>
  );
}
