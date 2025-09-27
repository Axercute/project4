import dayjs from 'dayjs';
let today = dayjs();
let days = 14;  // 2 weeks
export let timeRange = [];
export let dateRange = [];
export let dateTitle = "Date of visit";
export let timeTitle = "Time of visit";
// Business hours
let endHour = 21; // 9 PM
let openHour = 10;

// --- DATE RANGE LOGIC ---
// If it's after 9 PM, start date range from tomorrow
let dateStart = today.hour() >= endHour ? today.add(1, 'day') : today;

// Generate array of Day.js dates from today to 2 weeks later
for (let i = 0; i <= days; i++) {
  dateRange.push(dateStart.add(i, 'day').format('D MMMM YYYY'));
}

// --- TIME RANGE LOGIC ---
let start;

if (today.hour() >= endHour) {
  // If after closing -> start tomorrow at openHour
  start = today.add(1, 'day').hour(openHour).minute(0).second(0);
} else {
  // Otherwise round to the next hour
  start = today.minute() === 0 && today.second() === 0
    ? today
    : today.add(1, 'hour').startOf('hour');

  // If the next hour is still before opening -> adjust to openHour today
  if (start.hour() < openHour) {
    start = today.hour(openHour).minute(0).second(0);
  }
}

// Now make sure "start" belongs to the same day as dateStart
if (!start.isSame(dateStart, 'day')) {
  start = dateStart.hour(openHour).minute(0).second(0);
}

while (start.hour() <= endHour) {
  timeRange.push(start.format('h A'));
  start = start.add(1, 'hour');
}

