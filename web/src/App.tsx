import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import ChatMessage from './components/ChatMessage'
import ChatInput from './components/ChatInput'
import WelcomeScreen from './components/WelcomeScreen'
import LoadingIndicator from './components/LoadingIndicator'
import { sendChatMessage } from './services/api'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = { role: 'user', content }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await sendChatMessage(content, messages)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Maafi chaahte hain, jaani... kuch gadbad ho gayi. Dobara koshish karo.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-red-50'
    }`}>
      <Header isDark={isDark} onToggleTheme={() => setIsDark(prev => !prev)} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className={`backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 ${
          isDark ? 'bg-gray-800/90 border-gray-700' : 'bg-white/80 border-amber-200'
        }`}>
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <WelcomeScreen isDark={isDark} />
            ) : (
              messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} isDark={isDark} />
              ))
            )}
            {isLoading && <LoadingIndicator isDark={isDark} />}
            <div ref={chatEndRef} />
          </div>

          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} isDark={isDark} />
        </div>

        <div className="mt-8 text-center">
          <p className={`text-xl italic font-semibold ${isDark ? 'text-amber-500' : 'text-amber-900'}`}>
            "Aaj ki duniya mein sharafat ka faayda sirf bewakoof uthate hain."
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
