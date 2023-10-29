//convert date to cron time

export const dateToCronTime = (date: Date | string) => {
  const cronDate = new Date(date);
  const minutes = cronDate.getMinutes();
  const hour = cronDate.getHours();
  const day = cronDate.getDate();
  const month = cronDate.getMonth() + 1;

  return `${minutes} ${hour} ${day} ${month} *`;
};
