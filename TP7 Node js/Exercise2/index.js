const {khmerDateTest} = require('./lib');

//for check 
var amonth = 31*24*60*60*1000;
var aWeek = 7*24*60*60*1000;
var aDay = 24*60*60*1000;
var anHour = 60*60*1000;
var aSecond = 60*1000;
 
var checkDate = Date.now() - anHour;

 const khmerDate = new khmerDateTest(new Date(checkDate));
 //replace 
 var Str = khmerDate.getDate();
 Str = Str.replace('1','១');
 Str = Str.replace('2','២');
 Str = Str.replace('3','៣');
 Str = Str.replace('4','៤');
 Str = Str.replace('5','៥');
 Str = Str.replace('6','៦');
 Str = Str.replace('7','៧');
 Str = Str.replace('8','៨');
 Str = Str.replace('9','៩');


 console.log(Str);
