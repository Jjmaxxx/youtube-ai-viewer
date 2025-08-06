from flask import Blueprint, request
from services.channel import scrape_channel
from utils.decorators import format_response, use_cache

channel_bp = Blueprint("channel", __name__)


@channel_bp.route("/scrape", methods=["POST"])
@format_response
@use_cache(lambda: request.json.get("channel_id").lstrip("@"))
def scrape_channel_route():
    try:
        url = request.json.get("channel_id").lstrip("@")
        return scrape_channel(url)
    except Exception as e:
        return {"error": str(e)}, 500
