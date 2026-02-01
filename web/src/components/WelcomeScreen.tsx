import raajKumarLogo from '../assets/images.jpeg'

interface WelcomeScreenProps {
  isDark: boolean
}

export default function WelcomeScreen({ isDark }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-amber-500 shadow-xl">
        <img 
          src={raajKumarLogo} 
          alt="Raaj Kumar Portrait"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-amber-500' : 'text-amber-900'}`}>
        Namaskaar, Jaani
      </h2>
      <p className={`text-lg max-w-md ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Main Raaj Kumar hoon. Apni baat rakho, lekin tameez se.
      </p>
    </div>
  )
}
