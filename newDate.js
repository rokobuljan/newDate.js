/**
* newDate() - Get a new Date by passing extra parameters - by roko.cb
* - https://github.com/rokobuljan/newDate.js
* @param {(string|number|object)} date - String, timestamp or Date Object
* @param {string} modifiers - Adds or subtracts. "+7d" or like "-1y,+2m,+14d"
* @param {string} weekday - To nearest weekday "0"(Sun) "6"(Sat). "-0" for previous Sunday
* @return {object} - Returns a new Date Object with the reslut.
*/
function newDate(date, modifiers, weekday) {
  if (!date) {
    date = new Date();
  }else{
    date = new Date(date);
  }
  if (modifiers && typeof modifiers === "string") {
    modifiers = modifiers.split(",");
    while (modifiers.length) {
      var mod = modifiers.shift(),
          num = mod.split(/[dmy]/i)[0],
          dmy = mod.replace(num,"") || "d",
          props = {
            y : ["setFullYear", "getFullYear"],
            m : ["setMonth", "getMonth"],
            d : ["setDate", "getDate"]
          }[dmy.toLowerCase()];
      date = new Date(date[props[0]](date[props[1]]() + (+num)));
    }
  }
  if (weekday && typeof weekday === "string") {
    var i = weekday.indexOf("-") > -1 ? -1 : 1;
    while (date.getDay() !== Math.abs(+weekday%7)) {
      date.setDate(date.getDate() + i);
    }
  }
  return date;
}
