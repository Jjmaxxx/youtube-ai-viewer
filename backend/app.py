from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)
CORS(app, origins=[os.getenv("FRONTEND_URL")])
app.debug = os.getenv("FLASK_DEBUG", "1") == "1"


@app.route("/")
def home():
    print("hia")
    return ""


FLASK_ENV = os.getenv("FLASK_ENV", "development")
port = int(os.getenv("FLASK_RUN_PORT", 5000))


if __name__ == "__main__":
    app.run(port=port)
