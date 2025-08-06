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

4. Ensure that the Google API Key has access to Youtube Data API.

### 3. Run the App
In the root directory, run:
```bash
docker compose -f docker-compose.dev.yml up
```

### 4. Formatting and Linting

You can run formatting and linting commands by exec'ing into the respective Docker containers.

#### Frontend

Inside the `frontend` container, run:

```bash
npm run format
npm run lint
npm run lint:fix
```

#### Backend

Inside the `backend` container, run:

```bash
ruff format
ruff check
```


### 5. Thoughts and Considerations

- This project uses a simple file-based caching system instead of a full-fledged database. This decision was made due to the absence of specified database requirements and to keep the setup lightweight and dependency-free.
- Caching helps prevent repeated and unnecessary API requests to third-party services such as OpenAI and ScrapingDog, which could result in increased latency or cost. Cached responses are stored using hashed keys based on input data, enabling fast lookups and reusability of previously fetched or computed results.
- Docker was used to ensure consistent development and deployment environments across systems, simplifying onboarding and eliminating "it works on my machine" issues.
