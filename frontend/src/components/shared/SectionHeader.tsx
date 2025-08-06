import { ChevronDown, ChevronRight } from 'lucide-react';

interface Props {
  title: string;
  expanded: boolean;
  toggle: () => void;
}

export default function SectionHeader({ title, expanded, toggle }: Props) {
  return (
    <div
      onClick={toggle}
      className='w-full cursor-pointer flex items-center justify-between font-semibold text-gray-700 text-lg py-2 hover:bg-gray-100 rounded'
    >
      {title}
      {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
    </div>
  );
}
