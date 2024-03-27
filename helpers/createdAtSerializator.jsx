export const createdAtSerializator = (createdAt) => {
  return createdAt.toDate().toISOString();
};
