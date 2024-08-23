import React from 'react';
import { TimeZones } from '../types/timeZones';

interface TimezoneSelectorProps {
  selectedTimezone: TimeZones;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const timeZonesArray = Array.from({ length: 25 }, (_, i) => i - 12);

const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({ selectedTimezone, onChange }) => {
  return (
    <select value={selectedTimezone} onChange={onChange}>
      {timeZonesArray.map((timezone) => (
        <option key={timezone} value={timezone}>
          UTC {timezone >= 0 ? `+${timezone}` : timezone}
        </option>
      ))}
    </select>
  );
};

export default TimezoneSelector;
