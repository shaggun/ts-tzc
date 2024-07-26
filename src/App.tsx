import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';

enum TimeZones {
  UTC_MINUS_12 = -12,
  UTC_MINUS_11,
  UTC_MINUS_10,
  UTC_MINUS_9,
  UTC_MINUS_8,
  UTC_MINUS_7,
  UTC_MINUS_6,
  UTC_MINUS_5,
  UTC_MINUS_4,
  UTC_MINUS_3,
  UTC_MINUS_2,
  UTC_MINUS_1,
  UTC_PLUS_0,
  UTC_PLUS_1,
  UTC_PLUS_2,
  UTC_PLUS_3,
  UTC_PLUS_4,
  UTC_PLUS_5,
  UTC_PLUS_6,
  UTC_PLUS_7,
  UTC_PLUS_8,
  UTC_PLUS_9,
  UTC_PLUS_10,
  UTC_PLUS_11,
  UTC_PLUS_12,
}


const formatTime = (date: Date, offset: number): string => {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(utc + 3600000 * offset);
  const hours = String(adjustedDate.getHours()).padStart(2, '0');
  const minutes = String(adjustedDate.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

const timeZonesArray = Array.from({ length: 25 }, (_, i) => i - 12);

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [selectedOffset, setSelectedOffset] = useState<TimeZones>(TimeZones.UTC_PLUS_0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, []);

  const localTime = formatTime(currentTime, -currentTime.getTimezoneOffset() / 60);
  const timeZoneTime = formatTime(currentTime, selectedOffset);

  const handleTimeZoneChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOffset(parseInt(event.target.value) as TimeZones);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>{localTime} (Local Time)</h1>
      <h2 style={{ fontSize: '24px' }}>
        {timeZoneTime} (UTC{selectedOffset >= 0 ? `+${selectedOffset}` : selectedOffset})
      </h2>
      <select
        value={selectedOffset}
        onChange={handleTimeZoneChange}
        style={{ fontSize: '18px' }}
      >
        {timeZonesArray.map((offset) => (
          <option key={offset} value={offset}>
            UTC{offset >= 0 ? `+${offset}` : offset}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
