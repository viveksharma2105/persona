interface LoadingIndicatorProps {
  isDark: boolean
}

export default function LoadingIndicator({ isDark }: LoadingIndicatorProps) {
  return (
    <div className="flex justify-start">
      <div className={`max-w-[70%] rounded-2xl px-6 py-4 ${
        isDark
          ? 'bg-gradient-to-r from-amber-600 to-amber-700 border border-amber-500'
          : 'bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300'
      }`}>
        <div className="flex gap-2">
          <div className={`w-3 h-3 ${isDark ? 'bg-white' : 'bg-amber-600'} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
          <div className={`w-3 h-3 ${isDark ? 'bg-white' : 'bg-amber-600'} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
          <div className={`w-3 h-3 ${isDark ? 'bg-white' : 'bg-amber-600'} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}
