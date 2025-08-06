import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type FullPageLoaderProps = {
  message?: string;
  fullPage?: boolean;
  overlay?: boolean;
};

export default function FullPageLoader({
  message,
  fullPage = true,
  overlay = false,
}: FullPageLoaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-center items-center text-foreground',
        fullPage && !overlay && 'min-h-screen bg-background',
        overlay && 'fixed inset-0 bg-background/20 z-50 backdrop-blur-sm',
      )}
    >
      <Loader2 className='animate-spin w-10 h-10 mb-4' />
      <p className='text-lg font-medium'>{message || 'Loading...'}</p>
    </div>
  );
}
