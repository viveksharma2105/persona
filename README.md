# Raaj Kumar AI Persona Chat

An AI-powered chatbot that embodies the legendary Bollywood actor Raaj Kumar's persona.

## Features

- 🎭 Authentic Raaj Kumar personality with Hinglish dialogues
- 🌓 Dark/Light theme toggle
- 💬 Real-time chat interface
- 🎨 Beautiful UI with Tailwind CSS
- 🔌 FastAPI backend with OpenAI integration

## Project Structure

```
persona/
├── api.py                  # FastAPI backend server
├── pyproject.toml          # Python dependencies
├── .env                    # Environment variables (create this)
└── web/
    ├── src/
    │   ├── components/     # React components
    │   ├── services/       # API service
    │   ├── App.tsx         # Main app component
    │   └── assets/         # Images and static files
    └── package.json
```

## Setup Instructions

### 1. Backend

```bash
uv sync
echo "OPENAI_API_KEY=your_key_here" > .env
uv run python api.py
```

### 2. Frontend

```bash
cd web
npm install
npm run dev
```

### 3. Open Browser

- Backend: http://localhost:8000
- Frontend: http://localhost:5173

## Usage

1. Start backend server (port 8000)
2. Start frontend dev server (port 5173)
3. Chat with Raaj Kumar!

## API Endpoints

- `GET /` - Health check
- `POST /chat` - Send message
  - Body: `{ "message": string, "history": array }`
  - Response: `{ "response": string }`

## Technologies

**Frontend:** React, TypeScript, Vite, Tailwind CSS  
**Backend:** FastAPI, OpenAI GPT-4, Python 3.14+
