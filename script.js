// exercice 1

const importEX1 = document.querySelector(".ex1");

let bruxelleDate = new Date().toLocaleString('fr-BE', { timeZone: 'Europe/Brussels' });
let anchorageDate = new Date().toLocaleString('fr-BE', { timeZone: 'America/Anchorage' });
let reykjavikDate = new Date().toLocaleString('fr-BE', { timeZone: 'Atlantic/Reykjavik' });
let saintPetersburgDate = new Date().toLocaleString('fr-BE', { timeZone: 'Europe/Kiev' });

// console.log(bruxelleDate);
// console.log(anchorageDate);
// console.log(reykjavikDate);
// console.log(saintPetersburgDate);

importEX1.textContent = `Bruxelles: ${bruxelleDate}. Anchorage: ${anchorageDate}. Reykjavik: ${reykjavikDate}. Saint-Petersbourg: ${saintPetersburgDate}`;

// exercice 2 
const importEX2 = document.querySelector(".ex2");
let today = new Date();
let birthday = new Date("1981-08-02");

let ageInMilisecond = today.getTime() - birthday.getTime();
let ageInSecond = ageInMilisecond / 1000;
let ageInMinute = ageInSecond / 60;
let ageInHour = ageInMinute / 60;
let ageInDays = ageInHour /24;
let ageInYeard = ageInDays / 365;
console.log(ageInDays);
// console.log(birthday);

importEX2.textContent = `My age in days = ${ageInDays}`;

// exercice 3
const inputex3 = document.getElementById("hours");
const importEX3 = document.querySelector(".ex3");

const addhours = inputex3.addEventListener("keyup", (e) =>{
    const input = e.target.value;
    const today8miles = today.getTime() + input * 60 * 60 * 1000;
    const date8miles = new Date(today8miles);
    importEX3.textContent = `Date in 80000 hour: ${date8miles}`;
})



// console.log(today8miles);

// importEX3.textContent = `Date in 80000 hour: ${date8miles}`;