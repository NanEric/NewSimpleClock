import React, { useState } from 'react';
import { useCurrentTime } from './hooks/useCurrentTime';
import DigitalClock from './components/DigitalClock';
import DateDisplay from './components/DateDisplay';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const { hours, minutes, seconds, dayOfWeek, dateString } = useCurrentTime();
  const [isInverted, setIsInverted] = useState(false);

  const toggleInvert = () => {
    setIsInverted(!isInverted);
  };

  // Dynamic styles based on inverted state
  const containerClass = isInverted ? 'bg-white text-black' : 'bg-black text-[#E0E0E0]';
  const buttonClass = isInverted 
    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white';

  return (
    <div 
      className={`relative flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-colors duration-500 ${containerClass}`}
    >
      {/* Main Clock Content */}
      <main className="flex flex-col items-center justify-center z-10 scale-90 md:scale-100 transition-transform duration-300">
        <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
        <DateDisplay dayOfWeek={dayOfWeek} dateString={dateString} />
      </main>

       {/* Interactive Controls Overlay (Bottom Right) - Persistent */}
       <div className="absolute bottom-6 right-6 flex gap-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleInvert();
            }}
            className={`p-3 rounded-full transition-colors ${buttonClass}`}
            title="Toggle Color Theme"
          >
            {isInverted ? <Moon size={32} /> : <Sun size={32} />}
          </button>
       </div>
    </div>
  );
};

export default App;