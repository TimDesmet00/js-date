const days = document.querySelector(".days");
const datesDay = document.querySelector(".dates-day");
const datesMonth = document.querySelector(".dates-month");
const years = document.querySelector(".years");
const hours = document.querySelector(".hours");

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthOfYears = [
  "jan",
  "feb",
  "mar",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

let bruxelleDate = new Date();

console.log(bruxelleDate);

days.textContent = daysOfWeek[bruxelleDate.getDay()];
datesDay.textContent = `${bruxelleDate.getDate()}`;
datesMonth.textContent = monthOfYears[bruxelleDate.getMonth() - 1];
years.textContent = `${bruxelleDate.getFullYear()}`;
hours.textContent = `${bruxelleDate.getHours()}:${bruxelleDate.getMinutes()}:${bruxelleDate.getSeconds()}`;

let updateTime = () => {
  bruxelleDate = new Date();
  hours.textContent = `${bruxelleDate.getHours()}:${bruxelleDate.getMinutes()}:${bruxelleDate.getSeconds()}`;
};

setInterval(updateTime, 1000);
