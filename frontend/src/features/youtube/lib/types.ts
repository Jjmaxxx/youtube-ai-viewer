export interface ScrapedChannelVideoData {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  published_time: string;
  length: string;
}
export type PartialVideoWithId = Partial<Omit<ScrapedChannelVideoData, 'id'>> &
  Pick<ScrapedChannelVideoData, 'id'>; // only id required

export interface ScrapedVideoSection {
  section_title: string;
  videos: Array<ScrapedChannelVideoData>;
}
export interface ScrapedChannelData {
  about: {
    description: string;
    subscribers: number;
    videos: number;
  };
  videos_sections: Array<ScrapedVideoSection>;
}

export interface VideoMetadata {
  channel_title: string;
  comment_count: string;
  description: string;
  duration: string;
  like_count: string;
  published_at: string;
  tags: string[];
  title: string;
  view_count: string;
}

export interface VideoDetailsResponse {
  video: VideoMetadata;
  transcript: string;
  comments: string[];
}

export interface AIResponse {
  message: string;
}
