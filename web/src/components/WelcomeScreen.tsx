import raajKumarLogo from '../assets/images.jpeg'

interface WelcomeScreenProps {
  isDark: boolean
}

export default function WelcomeScreen({ isDark }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-amber-500 shadow-xl animate-scale-in hover:scale-110 transition-transform duration-300">
        <img 
          src={raajKumarLogo} 
          alt="Raaj Kumar Portrait"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className={`text-3xl font-bold mb-3 animate-slide-in-up ${isDark ? 'text-amber-500' : 'text-amber-900'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        Namaskaar, Jaani
      </h2>
      <p className={`text-lg max-w-md animate-slide-in-up ${isDark ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        Main Raaj Kumar hoon. Apni baat rakho, lekin tameez se.
      </p>
    </div>
  )
}
