interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
  isDark: boolean
}

export default function ChatMessage({ role, content, isDark }: ChatMessageProps) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} ${role === 'user' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
      <div
        className={`max-w-[70%] rounded-2xl px-6 py-4 transition-all hover:scale-[1.02] hover:shadow-xl ${
          role === 'user'
            ? isDark
              ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white border border-gray-600'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
            : isDark
              ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border border-amber-500'
              : 'bg-gradient-to-r from-amber-100 to-orange-100 text-gray-800 border-2 border-amber-300'
        }`}
      >
        <p className="text-lg leading-relaxed">{content}</p>
      </div>
    </div>
  )
}
