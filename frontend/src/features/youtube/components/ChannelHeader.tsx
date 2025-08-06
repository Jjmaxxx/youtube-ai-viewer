interface Props {
  channelId: string;
  description: string;
  videos: number;
  subscribers: number;
}

export default function ChannelHeader({ channelId, description, videos, subscribers }: Props) {
  return (
    <>
      <h1 className='text-3xl font-bold'>{channelId}</h1>
      <p className='text-gray-700'>{description}</p>
      <div className='flex gap-6 text-sm text-gray-600'>
        <span>Videos: {videos}</span>
        <span>Subscribers: {subscribers.toLocaleString()}</span>
      </div>
    </>
  );
}
