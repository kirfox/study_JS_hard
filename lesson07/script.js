'use strict';

let out = document.getElementById('out');
let day = new Date();
let week = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
//Find weekday 
let today = day.getDay();

week.splice(6,1, '<i>' +'суббота'+'</i>');
week.splice(0,1, '<i>' +'воскресенье'+'</i>');

week.splice(today,1, '<strong>' + week[today] + '</strong>');

//output jn the screen weekdays
week.forEach(function(item) {
  out.innerHTML += item + '<br>';
});





