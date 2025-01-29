export const dateFormater = (rawDate) => {
  const dateObj = new Date(rawDate);
  return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${dateObj.getDate().toString().padStart(2, "0")}`;
};
