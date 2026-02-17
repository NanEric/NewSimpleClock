import { useState, useEffect } from 'react';
import { TimeState } from '../types';

export const useCurrentTime = (): TimeState => {
  const [timeState, setTimeState] = useState<TimeState>({
    hours: '00',
    minutes: '00',
    seconds: '00',
    dayOfWeek: '',
    dateString: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format Time HH:mm:ss
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      // Format Day of Week (Chinese)
      const dayOfWeek = new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(now);

      // Format Date (YYYY年M月D日)
      // We build this manually to match the specific "2026 年 2 月 18 日" spacing/format exactly if needed,
      // or use Intl. Note: Intl might give "2026年2月18日" without spaces. 
      // The image shows spaces: "2026 年 2 月 18 日"
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const dateString = `${year} 年 ${month} 月 ${day} 日`;

      setTimeState({
        hours,
        minutes,
        seconds,
        dayOfWeek,
        dateString
      });
    };

    // Initial call
    updateTime();

    // Set interval to update every second
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return timeState;
};