import { useState } from 'react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
  isDark: boolean
}

export default function ChatInput({ onSendMessage, isLoading, isDark }: ChatInputProps) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    onSendMessage(input)
    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={`border-t-2 p-6 ${
      isDark 
        ? 'border-gray-700 bg-gray-900' 
        : 'border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50'
    }`}>
      <div className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className={`flex-1 px-6 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 text-lg transition-all focus:scale-[1.02] ${
            isDark
              ? 'border-gray-700 focus:border-amber-500 focus:ring-amber-500/50 bg-gray-800 text-white placeholder-gray-500'
              : 'border-amber-300 focus:border-amber-500 focus:ring-amber-200 bg-white text-gray-900 placeholder-gray-400'
          }`}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold text-lg hover:from-amber-700 hover:to-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 hover:-translate-y-1"
        >
          Send
        </button>
      </div>
    </div>
  )
}
