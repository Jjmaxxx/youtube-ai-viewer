import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className='flex min-h-screen'>
      <div className='w-full flex flex-col justify-center p-16 '>
        <div className='w-full'>
          <a href='/' className='text-3xl font-bold'>
            YouTube AI Summarizer
          </a>
        </div>
        <div className='flex flex-1 items-center justify-center px-4 pb-12'>
          <div className='w-full max-w-5xl flex items-center justify-center'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
