const formatTime = (date: Date, offset: number): string => {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(utc + 3600000 * offset);
  const hours = String(adjustedDate.getHours()).padStart(2, '0');
  const minutes = String(adjustedDate.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export default formatTime;