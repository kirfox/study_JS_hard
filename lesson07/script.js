'use strict';

let out = document.getElementById('out');
let day = new Date();
let week = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
//Find weekday 
let today = day.getDay() - 1;

week.splice(6,1, '<i>' +'суббота'+'</i>');
week.splice(6,1, '<i>' +'воскресенье'+'</i>');

week.splice(today,1, '<strong>' + week[today] + '</strong>');

//output jn the screen weekdays
week.forEach(function(item) {
  out.innerHTML += item + '<br>';
});





