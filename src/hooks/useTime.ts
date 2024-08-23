import { useState, useEffect } from 'react';
import formatTime from '../utils/formatTime';

const useTime = (timezone: number) => {
  const [currentTime, setCurrentTime] = useState<string>(formatTime(new Date(), timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime(new Date(), timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return currentTime;
};

export default useTime;
