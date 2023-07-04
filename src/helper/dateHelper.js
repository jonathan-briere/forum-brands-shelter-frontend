export const dateDifference = (start, last) => {
  const lastDate = last ? new Date(last) : new Date();
  const startDate = new Date(start);
  const diff = lastDate.getTime() - startDate.getTime();

  return Math.round(diff / (1000 * 60 * 60 * 24));
};
