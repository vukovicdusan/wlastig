export const postDateFormater = (rawDate) => {
  // const dateObj = new Date(rawDate);
  const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
  // return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1)
  //   .toString()
  //   .padStart(2, "0")}-${dateObj.getDate().toString().padStart(2, "0")}`;
};
