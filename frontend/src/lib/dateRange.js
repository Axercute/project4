import dayjs from 'dayjs';

  let today = dayjs();
  let days = 14;  // 2 weeks
  //Time format
  let endHour = 21; // 9 PM in 24h format
  let openHour = 10

  // --- DATE RANGE LOGIC ---
// If it's after 9 PM, start date range from tomorrow`
let dateStart = today.hour() >= endHour ? today.add(1, 'day') : today;

  // Generate array of Day.js dates from today to 2 weeks later
 export let dateRange = [];
for (let i = 0; i <= days; i++) {
  dateRange.push(dateStart.add(i, 'day').format('D MMMM YYYY'));
}

// If current hour is after closing time, set to tomorrow at 10 AM
let start;
if (today.hour() >= endHour) {
  start = today.add(1, 'day').hour(openHour).minute(0).second(0);
} else {
  start = today.minute() === 0 && today.second() === 0
    ? today
    : today.add(1, 'hour').startOf('hour');

  // If the next hour is still before openHour, adjust to openHour
  if (start.hour() < openHour) {
    start = start.hour(openHour).minute(0).second(0);
  }
}

export let timeRange = [];

while (start.hour() <= endHour) {
  timeRange.push(start.format('h A'));
  start = start.add(1, 'hour');
}


export let dateTitle = "Date of visit"//
export let timeTitle = "Time of visit"//