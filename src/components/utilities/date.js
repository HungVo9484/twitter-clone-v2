export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const years = () => {
  const yearsArr = [];
  const from = 1900;
  const to = new Date().getFullYear();
  for (let i = from; i < to + 1; i++) {
    yearsArr.unshift(i);
  }
  return yearsArr;
};

export const dates = (month, year) => {
  let date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
};
