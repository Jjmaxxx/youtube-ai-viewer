from flask import Blueprint, request
from services.analyze import analyze_video

analyze_bp = Blueprint("analyze", __name__)


@analyze_bp.route("/video", methods=["POST"])
def analyze_video_route():
    try:
        input_data = request.get_json()
        result = analyze_video(input_data)
        return result
    except Exception as e:
        return {"error": str(e)}, 500
