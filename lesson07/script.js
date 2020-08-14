'use strict';

let out = document.getElementById('out');
let day = new Date();
let week = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

let today = day.getDay();
week.splice(6,1, '<i>' +'суббота'+'</i>');
week.splice(0,1, '<i>' +'воскресенье'+'</i>');

week.forEach(function(item) {
 
  out.innerHTML += item + '<br>';
  
});
//  ('<strong>' + today + '</strong>'); 


console.log(week );

console.log(week[today]);

