import requests
import os

SCRAPINGDOG_API_KEY = os.getenv("SCRAPINGDOG_API_KEY")

def scrape_channel(channel_id:str)-> dict:
    params = {
        "api_key": SCRAPINGDOG_API_KEY,
        "channel_id": f"@{channel_id}"
    }

    api_url = f"https://api.scrapingdog.com/youtube/channel/"
    response = requests.get(api_url, params=params)
    data = response.json()
    return data