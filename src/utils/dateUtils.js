export const getMonth = d => {
  const date = new Date(d);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  return month;
};

export const getDaysInMonth = d => {
  const date = new Date(d);
  return new Date(date.getYear(), date.getMonth() + 1, 0).getDate();
};

export const datesEqual = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  if (date1.getDate() === date2.getDate()
    && date1.getMonth() === date2.getMonth()
    && date1.getYear() === date2.getYear()
  ) return true;

  return false;
};

export const getDayOfWeek = d => {
  const date = new Date(d);
  const dayOfWeek = date.getDay();
  return isNaN(dayOfWeek) ? null : ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][dayOfWeek];
};

export const dateLessThan = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  if (date1.getDate() <= date2.getDate() && date1.getMonth() < date2.getMonth()) return true;

  return false;
};