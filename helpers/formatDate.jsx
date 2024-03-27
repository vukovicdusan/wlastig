export const formatDate = (date) => {
  let writeDate = date.toLocaleDateString("sr-RS").split(". ");
  let yearArr = writeDate[writeDate.length - 1].split("");
  yearArr.pop();
  let year = yearArr.join("");
  writeDate.pop();
  writeDate.push(year);
  return writeDate.join("/");
};
