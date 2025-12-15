export function pad(num) {
  return num < 10 ? "0" + num : num;
}

export function formatDate(date, fmt = "YYYY-MM-DD") {
  // 判断date是否是字符串格式，如是则将-替换为/
  if (typeof date === "string") {
    date = date.replace(/-/g, "/");
  }
  // 判断是否有分钟，如果有则补充秒为00
  if (
    typeof date === "string" &&
    /^\d{4}[-/]\d{1,2}[-/]\d{1,2} \d{1,2}:\d{1,2}$/.test(date)
  ) {
    date += ":00";
  }
  const d = new Date(date);
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  if (fmt === "YYYY-MM-DD") return `${year}-${month}-${day}`;
  if (fmt === "MM月DD日") return `${month}月${day}日`;
  return `${year}-${month}-${day}`;
}

export function formatDateTime(date) {
  // 判断date是否是字符串格式，如是则将-替换为/
  if (typeof date === "string") {
    date = date.replace(/-/g, "/");
  }
  // 判断是否有分钟，如果有则补充秒为00
  if (
    typeof date === "string" &&
    /^\d{4}[-/]\d{1,2}[-/]\d{1,2} \d{1,2}:\d{1,2}$/.test(date)
  ) {
    date += ":00";
  }
  const d = new Date(date);
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hour = pad(d.getHours());
  const minute = pad(d.getMinutes());
  const second = pad(d.getSeconds());
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}

export function formatTime(date) {
  const d = new Date(date);
  return pad(d.getHours()) + ":" + pad(d.getMinutes());
}

export function addMonth(date, n) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + n);
  return d;
}

export function addHour(date, n) {
  const d = new Date(date);
  d.setHours(d.getHours() + n);
  return d;
}

export function getDay(date) {
  return new Date(date).getDay();
}

// 获取开始日期到结束日期之间的所有日期
export function getDatesBetween(start, end) {
  const dates = [];
  let current = new Date(start);
  const last = new Date(end);
  while (current.getTime() <= last.getTime()) {
    dates.push(formatDate(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

// 开始日期是否早于当前日期
export const startDateIsBeforeCurrent = (startDate, startHour, startMinute) => {
  const now = new Date();
  const start = new Date(`${startDate} ${pad(startHour)}:${pad(startMinute)}`);
  return start.getTime() < now.getTime();
};

// 结束日期是否早于开始日期
export const endDateIsBeforeStartDate = (
  startDate,
  startHour,
  startMinute,
  endDate,
  endHour,
  endMinute
) => {
  const end = new Date(`${endDate} ${pad(endHour)}:${pad(endMinute)}`);
  const start = new Date(`${startDate} ${pad(startHour)}:${pad(startMinute)}`);
  return end.getTime() < start.getTime();
};

// 结束日期是否超过限制日期
export const endDateIsAfterLimitDate = (
  startDate,
  startHour,
  startMinute,
  endDate,
  endHour,
  endMinute,
  limitUseTime
) => {
  if (limitUseTime) {
    const start = new Date(
      `${startDate} ${pad(startHour)}:${pad(startMinute)}`
    );
    const endDateTimeLimit = addHour(start, limitUseTime);
    const end = new Date(`${endDate} ${pad(endHour)}:${pad(endMinute)}`);
    return end.getTime() > endDateTimeLimit.getTime();
  }
  return false;
};
