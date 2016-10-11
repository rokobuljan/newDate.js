/**
* newDate() - Get a new Date by passing extra parameters - by roko.cb
* @param {(object|number|string)} date - Date Object, String or timestamp number
* @param {string} adjust - Adds or subtracts. "+7d" or like "-1y,+2m,+14d"
* @param {string} nearest - To nearest weekday "0"(Sun) "6"(Sat). "-0" for previous Sunday
* @return {object} - Returns a new Date Object
*/
function newDate(date, adjust, nearest){
  if(!date){
    date = new Date();
  }else if(typeof date !== "object"){
    date = new Date(date);
  }
  if(adjust && typeof adjust === "string") {
    adjust = adjust.split(",");
    while(adjust.length){
      var a = adjust.shift(),
          num = a.split(/[dmy]/i)[0],
          dmy = a.replace(num,"")||"d",
          props = {
            y : ["setFullYear","getFullYear"],
            m : ["setMonth","getMonth"],
            d : ["setDate","getDate"]
          }[dmy.toLowerCase()];
      date = new Date(date[props[0]](date[props[1]]()+(+num)));
    }
  }
  if(nearest && typeof nearest === "string"){
    var i = nearest.indexOf("-")>-1?-1:1;
    while (date.getDay() !== Math.abs(+nearest%7)) {
      date.setDate(date.getDate()+i);
    }
  }
  return date;
}
