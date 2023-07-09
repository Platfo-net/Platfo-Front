const formatToISOString = (num: number, length: number) => {
  return "0"
    .repeat(length)
    .concat(num.toString())
    .slice(-1 * length);
};
const timerFormatter = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes ? formatToISOString(minutes, 2) : "00"}:${seconds ? formatToISOString(seconds, 2) : "00"}`;
};

export { timerFormatter };
