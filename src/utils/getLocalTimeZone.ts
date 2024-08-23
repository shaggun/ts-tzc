const getLocalTimeZone = (date: Date ): number => {
  // Get the timezone offset in minutes
  const timezoneOffsetInMinutes = date.getTimezoneOffset();

  // Convert the offset to hours
  const offsetHours = Math.floor(Math.abs(timezoneOffsetInMinutes) / 60);

  const sign = timezoneOffsetInMinutes > 0 ? "-" : "+";

  const timezoneOffset = `${sign}${offsetHours}`;

  return Number(timezoneOffset);
};

export default getLocalTimeZone;