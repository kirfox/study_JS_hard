'use strict';

let d = new Date(),
    day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота"),
    month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

// change the declensions of minutes, hours, seconds
let changeHour = function(n){
  switch (n) {
    case d.getMinutes():
      return (d.getMinutes() == 1 || (d.getMinutes() > 19 && d.getMinutes() % 10 == 1)) ? 'минута' :
      ((d.getMinutes() > 1 && d.getMinutes() < 5) || (d.getMinutes() > 19 && d.getMinutes() % 10 > 1 && d.getMinutes() % 10 < 5)) ? 'минуты' : 'минут';
    case d.getHours():
      return (d.getHours() == 1 || (d.getHours() > 19 && d.getHours() % 10 == 1)) ? 'час' :
      ((d.getHours() > 1 && d.getHours() < 5) || (d.getHours() > 19 && d.getHours() % 10 > 1 && d.getHours() % 10 < 5)) ? 'часа' : 'часов';
    case d.getSeconds():
        return (d.getSeconds() == 1 || (d.getSeconds() > 19 && d.getSeconds() % 10 == 1)) ? 'секунда' :
        ((d.getSeconds() > 1 && d.getSeconds() < 5) || (d.getSeconds() > 19 && d.getSeconds() % 10 > 1 && d.getSeconds() % 10 < 5)) ? 'секунды' : 'секунд';
    default:
      break;
  }
};

// add zero 
let addZero = function(num){
  if (num >= 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
};

//output date and time every second
function setInterval()
{
  let d = new Date();
  let time,
      hour=d.getHours(),
      min=d.getMinutes(),
      sec=d.getSeconds();
  document.getElementById('timer').innerHTML =addZero(d.getDate()) + "." + addZero((d.getMonth() + 1)) + "." + d.getFullYear() + " - " + 
  addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
  time = setTimeout('setInterval()', 500);
}

out.innerHTML ='а) Сегодня ' + day[d.getDay()]+", " +d.getDate()+ " " + month[d.getMonth()] 
+ " " + d.getFullYear() + " года, " + d.getHours() + " " + changeHour(d.getHours()) + " "  + d.getMinutes()
+ " " + changeHour(d.getMinutes()) + " " + d.getSeconds() + " " + changeHour(d.getSeconds()) ;

out2.innerHTML = 'б) ' + addZero(d.getDate()) + "." + addZero((d.getMonth() + 1))
+ "." + d.getFullYear() + " - " + addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());

setInterval();