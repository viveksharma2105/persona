const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export async function sendChatMessage(message: string, history: Message[]): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to get response from server')
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}
