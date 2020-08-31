'use strict';

const block = document.getElementById("block");
const plus = document.getElementById("plus");
const restart = document.getElementById("restart");

let flyInternal;
let count = 0;
let animation = function(){
    flyInternal = requestAnimationFrame(animation);
    count+=5;
    block.style.left = count + 'px';
};

let animate = true;
plus.addEventListener('click', function(){

    if (animate) {
        flyInternal = requestAnimationFrame(animation);
        animate = false;
        plus.textContent = 'pause';
    } else {
        cancelAnimationFrame(flyInternal);
        animate = true;
        plus.textContent = 'play';
    }    
});

restart.addEventListener('click', function(){
    animate = true;
    count = 0;
    plus.textContent = 'play';
    cancelAnimationFrame(flyInternal);
    block.style.left = 0 + 'px';
});
