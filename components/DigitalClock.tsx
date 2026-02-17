import React from 'react';

interface DigitalClockProps {
  hours: string;
  minutes: string;
  seconds: string;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ hours, minutes, seconds }) => {
  // Custom separator component to render two circular dots
  // Using em units ensures the dots scale perfectly relative to the font size
  // Increased horizontal margin to mx-[0.3em] to add spacing
  const Separator = () => (
    <div className="flex flex-col justify-center gap-[0.25em] mx-[0.3em] h-[0.8em]">
      <div className="w-[0.12em] h-[0.12em] rounded-full bg-current"></div>
      <div className="w-[0.12em] h-[0.12em] rounded-full bg-current"></div>
    </div>
  );

  return (
    <div className="flex items-center justify-center font-bold tracking-wider select-none">
      {/* 
        Using tabular-nums ensures monospaced numbers.
        Flex container ensures vertical alignment between numbers and the custom dot separators.
      */}
      <div className="flex items-center text-[18vw] sm:text-[22vw] md:text-[20vw] lg:text-[18rem] leading-none tabular-nums font-mono">
        <span>{hours}</span>
        <Separator />
        <span>{minutes}</span>
        <Separator />
        <span>{seconds}</span>
      </div>
    </div>
  );
};

export default DigitalClock;