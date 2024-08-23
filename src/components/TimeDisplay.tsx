import React from 'react';
import { TimeZones } from '../types/timeZones';

interface TimeDisplayProps {
  time: string;
  timezone: TimeZones;
  label?: string;
  className?: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, timezone, label = '', className = '' }) => {

  const formattedTimeZone = `UTC${timezone >= 0 ? `+${timezone}` : timezone}`;

  return (
    <div className={className}>
      <p>{`${time} ${formattedTimeZone} ${label}`}</p>
    </div>
  );
};

export default TimeDisplay;
