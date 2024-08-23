import React from 'react';
import { TimeZones } from '../types/timeZones';

interface TimeDisplayProps {
  time: string;
  timezone: TimeZones;
  label?: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, timezone, label = '' }) => {

  const formattedTimeZone = `UTC${timezone >= 0 ? `+${timezone}` : timezone}`;

  return (
    <div className="time-display">
      <p>{`Time in ${formattedTimeZone}: ${time} ${label}`}</p>
    </div>
  );
};

export default TimeDisplay;
