import raajKumarLogo from '../assets/images.jpeg'

interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className={`${
      isDark 
        ? 'bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-800' 
        : 'bg-gradient-to-r from-amber-900 via-orange-800 to-red-900'
    } text-white shadow-2xl`}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl">
              <img 
                src={raajKumarLogo} 
                alt="Raaj Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 tracking-wide text-amber-500">Raaj Kumar</h1>
              <p className={`text-lg italic ${isDark ? 'text-gray-300' : 'text-amber-200'}`}>
                "Hum jahan khade hote hain, line wahi se shuru hoti hai."
              </p>
            </div>
          </div>
          
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`p-3 rounded-full transition-all ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 text-amber-500' 
                : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
