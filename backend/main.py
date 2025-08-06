from app import create_app
import os

app = create_app()

FLASK_ENV = os.getenv("FLASK_ENV", "development")
port = int(os.getenv("FLASK_RUN_PORT", 5000))

if __name__ == "__main__":
    app.run(port=port)
