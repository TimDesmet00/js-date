const days = document.querySelector(".days");
const datesDay = document.querySelector(".dates-day");
const datesMonth = document.querySelector(".dates-month");
const years = document.querySelector(".years");
const hours = document.querySelector(".hours");

let bruxelleDate = new Date();

console.log(bruxelleDate);

days.textContent = `${bruxelleDate.getDay()}`;
datesDay.textContent = `${bruxelleDate.getDate()}`;
datesMonth.textContent = `${bruxelleDate.getMonth()}`;
years.textContent = `${bruxelleDate.getFullYear()}`;

hours.textContent= `${bruxelleDate.getHours()}:${bruxelleDate.getMinutes()}:${bruxelleDate.getSeconds()}`;