import os
from googleapiclient.discovery import build
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import (
    TranscriptsDisabled,
    NoTranscriptFound,
    VideoUnavailable,
)

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
youtube = build("youtube", "v3", developerKey=GOOGLE_API_KEY, static_discovery=False)


def get_transcript(video_id: str, language_priority=["en"]) -> str:
    try:
        ytt_api = YouTubeTranscriptApi()
        transcript = ytt_api.fetch(video_id, languages=language_priority)
        return " ".join([snippet.text for snippet in transcript])
    except (TranscriptsDisabled, NoTranscriptFound, VideoUnavailable) as e:
        return f"Transcript not available: {str(e)}"
    except Exception as e:
        return f"Transcript error: {str(e)}"


def get_video_details(video_id: str) -> dict:
    request = youtube.videos().list(
        part="snippet,contentDetails,statistics", id=video_id
    )
    response = request.execute()

    items = response.get("items", [])
    if not items:
        return None

    snippet = items[0]["snippet"]
    statistics = items[0]["statistics"]
    content_details = items[0]["contentDetails"]

    return {
        "title": snippet["title"],
        "description": snippet["description"],
        "channel_title": snippet["channelTitle"],
        "published_at": snippet["publishedAt"],
        "tags": snippet.get("tags", []),
        "view_count": statistics.get("viewCount"),
        "like_count": statistics.get("likeCount"),
        "comment_count": statistics.get("commentCount"),
        "duration": content_details["duration"],
    }


def get_comments(video_id: str, max_comments: int = 30) -> list[str]:
    results = []
    request = youtube.commentThreads().list(
        part="snippet",
        videoId=video_id,
        maxResults=min(max_comments, 100),
        textFormat="plainText",
        order="relevance",
    )
    response = request.execute()
    for item in response.get("items", []):
        top_comment = item["snippet"]["topLevelComment"]["snippet"]
        top_text = top_comment["textDisplay"]
        results.append(top_text)
        if len(results) >= max_comments:
            break

    return results


def get_full_video_data(video_id: str) -> dict:
    details = get_video_details(video_id)
    comments = get_comments(video_id, max_comments=30)
    transcript = get_transcript(video_id)

    return {"video": details, "comments": comments, "transcript": transcript}
