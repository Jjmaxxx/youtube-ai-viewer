import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';

interface Props {
  comments: string[];
}

export default function CommentsSection({ comments }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='border-t pt-4'>
      <SectionHeader
        title='Top Comments'
        expanded={expanded}
        toggle={() => setExpanded((prev) => !prev)}
      />
      {expanded && (
        <ul className='space-y-2 max-h-48 overflow-y-auto text-sm mt-2'>
          {comments.map((comment, idx) => (
            <li key={idx} className='bg-gray-50 p-2 rounded border flex gap-2'>
              <span className='text-gray-500 font-medium w-5 text-right'>{idx + 1}.</span>
              <span>{comment}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
