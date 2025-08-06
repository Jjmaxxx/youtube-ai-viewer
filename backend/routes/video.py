from flask import Blueprint, request
from services.video import get_full_video_data
from utils.decorators import format_response, use_cache

video_bp = Blueprint("video", __name__)


@video_bp.route("/video_details", methods=["POST"])
@format_response
@use_cache(lambda: request.json.get("video_id"))
def video_details_route():
    try:
        video_id = request.json.get("video_id")
        return get_full_video_data(video_id)
    except Exception as e:
        return {"error": str(e)}, 500
