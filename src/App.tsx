import React, { useState } from 'react';
import './App.css';
import useTime from './hooks/useTime';
import formatTime from './utils/formatTime';
import { TimeZones } from './types/timeZones';
import TimeDisplay from './components/TimeDisplay';
import getLocalTimeZone from './utils/getLocalTimeZone';
import TimezoneSelector from './components/TimezoneSelector';

const App: React.FC = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<TimeZones>(TimeZones.UTC_PLUS_0);
  const currentTime = new Date();
  const selectedTime = useTime(selectedTimezone);
  const localTimeZoneOffset = -currentTime.getTimezoneOffset() / 60;
  const localTime = formatTime(currentTime, localTimeZoneOffset);

  const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimezone(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <TimeDisplay time={localTime} timezone={getLocalTimeZone(currentTime)} label={'(Local time)'} />
      <TimeDisplay time={selectedTime} timezone={selectedTimezone} />
      <TimezoneSelector selectedTimezone={selectedTimezone} onChange={handleTimezoneChange} />
    </div>
  );
};

export default App;
