const importEX1 = document.getElementsByClassName("ex1")

let bruxelleDate = new Date().toLocaleString('fr-BE', { timeZone: 'Europe/Brussels' });
let anchorageDate = new Date().toLocaleString('fr-BE', { timeZone: 'America/Anchorage' });
let reykjavikDate = new Date().toLocaleString('fr-BE', { timeZone: 'Atlantic/Reykjavik' });
let saintPetersburgDate = new Date().toLocaleString('fr-BE', { timeZone: 'Europe/Kiev' });

console.log(bruxelleDate);
console.log(anchorageDate);
console.log(reykjavikDate);
console.log(saintPetersburgDate);

importEX1.innerHTML = `Bruxelle: ${bruxelleDate}`;


