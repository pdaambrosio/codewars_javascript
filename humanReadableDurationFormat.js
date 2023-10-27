function formatDuration(seconds) {
  /**
   * If the number of seconds is 0, return 'now'. Otherwise, divide the number of seconds by the number
   * of seconds in each time unit, and push the result to an array. If the array has more than one
   * element, join the first n-1 elements with a comma and the word 'and', and join the last element to
   * the result of that. Otherwise, return the first element of the array.
   * @param seconds - the duration, in seconds, to format
   * @returns the number of seconds in a given time period.
   */
  if (seconds === 0) {
    return "now";
  }

  const time = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  const result = [];
  let remainder = seconds;

  for (const key in time) {
    const value = Math.floor(remainder / time[key]);
    if (value > 0) {
      result.push(`${value} ${key}${value > 1 ? "s" : ""}`);
      remainder = remainder % time[key];
    }
  }

  return result.length > 1
    ? `${result.slice(0, -1).join(", ")} and ${result.slice(-1)}`
    : result[0];
}

console.log(formatDuration(1)); // 1 second
console.log(formatDuration(62)); // 1 minute and 2 seconds
console.log(formatDuration(120)); // 2 minutes
console.log(formatDuration(3600)); // 1 hour
console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 seconds
