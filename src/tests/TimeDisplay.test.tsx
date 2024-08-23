import { render, screen } from '@testing-library/react';
import TimeDisplay from '../components/TimeDisplay';
import { TimeZones } from '../types/timeZones';

test('renders time and timezone correctly', () => {
  render(<TimeDisplay time="12:34" timezone={TimeZones.UTC_PLUS_0} />);
  expect(screen.getByText('Time in UTC +0: 12:34')).toBeInTheDocument();
});
