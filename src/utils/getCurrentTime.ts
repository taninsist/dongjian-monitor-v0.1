export function getCurrentTime(format: TimeFormat): string {
  const now = new Date();
  let formattedTime = '';

  if (format === 'YYYY-MM-DD') {
    formattedTime = now.toISOString().split('T')[0];
  } else if (format === 'HH:mm:ss') {
    formattedTime = now.toTimeString().split(' ')[0];
  } else {
    // 默认格式
    formattedTime = now.toLocaleString();
  }

  return formattedTime;
}

export enum TimeFormat {
  YYYY_MM_DD = 'YYYY-MM-DD',
  HH_mm_ss = 'HH:mm:ss',
  DEFAULT = 'DEFAULT',
}


// console.log(getCurrentTime(timeFormat1)); // 输出：当前日期，例如：2023-07-25
// console.log(getCurrentTime(timeFormat2)); // 输出：当前时间，例如：14:30:00
// console.log(getCurrentTime()); // 输出：默认格式的当前时间和日期