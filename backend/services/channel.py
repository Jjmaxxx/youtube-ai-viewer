import requests
import os

SCRAPINGDOG_API_KEY = os.getenv("SCRAPINGDOG_API_KEY")


def scrape_channel(channel_id: str) -> dict:
    params = {"api_key": SCRAPINGDOG_API_KEY, "channel_id": f"@{channel_id}"}

    api_url = "https://api.scrapingdog.com/youtube/channel/"
    response = requests.get(api_url, params=params)
    data = response.json()
    cleaned_data = {
        "about": {
            "description": data.get("about", {}).get("description", ""),
            "subscribers": data.get("about", {}).get("subscribers", 0),
            "videos": data.get("about", {}).get("videos", 0),
        },
        "videos_sections": [],
    }

    for section in data.get("videos_sections", []):
        cleaned_section = {
            "section_title": section.get("section_title", ""),
            "videos": [],
        }

        for video in section.get("videos", []):
            cleaned_video = {
                "id": video.get("id", ""),
                "title": video.get("title", ""),
                "thumbnail": video.get("thumbnail", ""),
                "link": video.get("link", ""),
                "published_time": video.get("published_time", ""),
                "length": video.get("length", ""),
            }
            cleaned_section["videos"].append(cleaned_video)

        cleaned_data["videos_sections"].append(cleaned_section)

    return cleaned_data
