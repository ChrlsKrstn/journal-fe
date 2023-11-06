export const getDate = () => {
  const newDate = new Date();
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  return year + '-' + ("0" + (month + 1)).slice(-2) + '-' + ("0" + day).slice(-2);
}