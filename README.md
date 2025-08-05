## Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Jjmaxxx/youtube-ai-viewer
```

### 2. Setup the Environment

You need to configure environment variables for both the frontend and backend applications.

#### Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Copy the sample environment file (.env.sample) and rename it to .env:
```bash
cp .env.sample .env
```

3. Open .env and update any variables as needed.

#### Backend
1. Navigate to the backend directory:
```bash
cd backend
```

2. Copy the sample environment file (.env.sample) and rename it to .env:
```bash
cp .env.sample .env
```

3. Open .env and update any variables as needed.

### 3. Run the App
In the root directory, run:
```bash
docker compose -f docker-compose.dev.yml up