const fullDate = (date: string): string => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.toLocaleString('default', { month: 'long' });
  const year = newDate.getFullYear();

  return `${day} de ${month} de ${year}`;
};

export default fullDate;
