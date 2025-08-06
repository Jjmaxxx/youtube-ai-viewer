from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os
from routes.analyze import analyze_bp
from routes.channel import channel_bp
from routes.video import video_bp


load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app, origins=[os.getenv("FRONTEND_URL")])
    app.debug = os.getenv("FLASK_DEBUG", "1") == "1"
    app.register_blueprint(analyze_bp, url_prefix="/analyze")
    app.register_blueprint(channel_bp, url_prefix="/channel")
    app.register_blueprint(video_bp, url_prefix="/video")
    return app
