const { DateTime, Interval } = require("luxon");

const agora = DateTime.now();
console.log(agora.month);
console.log(new Date().toLocaleString());

const dataDoAniversario = DateTime.fromFormat("01/02/1998", "dd/MM/yyyy");
console.log(dataDoAniversario.day);
console.log(dataDoAniversario.month);

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length("year");
console.log(Math.floor(idade));

const isoDate = "2020-11-19T21:22:00-0300";
const RFC = "Tru, 19 Nov 2020 21:22:00 -0300";

console.log(DateTime.fromISO(isoDate).toLocaleString());
console.log(DateTime.fromRFC2822(RFC).toLocaleString());
