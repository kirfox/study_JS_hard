'use strict';

let change = document.getElementById('change');
let color = document.getElementById('color');
let letters = '0123456789ABCDEF';
let colorText = '#';


change.addEventListener('click', function(){
    for (var i = 0; i < 6; i++){
        //get 6 random elements from 'letters' and write in variable 'colorText'
        colorText += letters[(Math.floor(Math.random() * 16))];
        
        document.body.style.background = colorText;
        color.textContent = colorText;
        change.style.color = colorText;
    }
    colorText = '#';
});



