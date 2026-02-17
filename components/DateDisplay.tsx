import React from 'react';

interface DateDisplayProps {
  dayOfWeek: string;
  dateString: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ dayOfWeek, dateString }) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-6 mt-4 md:mt-8 select-none">
      <div className="text-4xl md:text-6xl font-bold tracking-widest font-sans">
        {dayOfWeek}
      </div>
      <div className="text-3xl md:text-5xl font-bold tracking-wide font-sans opacity-90">
        {dateString}
      </div>
    </div>
  );
};

export default DateDisplay;