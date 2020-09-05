'use strict';


document.addEventListener('DOMContentLoaded', function() {
   
    //class DomElement
    function DomElement(selector, height, width, bg, fontSize, left, right, top, down) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.left = left;
        this.right = right;
        this.top = top;
        this.down = down;
    }

    //method class DomElement
    DomElement.prototype.createdElement = function(){
        let div;
        let countTopDown = 0;
        let countRightLeft = 0;

        div = document.createElement("div");
        
        //styles are add
        div.className = this.selector.slice(1);
        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize + 'px';
        div.style.position = 'absolute';
        document.body.appendChild(div);
        let addText = document.createTextNode('asd');


        function moveBlock(event) {
            div.style.position = 'relative';
            
            if (event.keyCode === 38) {
                countTopDown -= 10;
                div.style.top = countTopDown + 'px'; 
            } else if(event.keyCode === 39){
                countRightLeft -= 10;
                div.style.right = countRightLeft + 'px'; 
            } else if(event.keyCode === 40){
                countTopDown += 10;
                div.style.top = countTopDown + 'px'; 
            } else if(event.keyCode === 37){
                countRightLeft += 10;
                div.style.right = countRightLeft + 'px';    
            }
        }

        window.addEventListener('keydown', moveBlock);
    };

    //new object based on the DomElement class
    let DomElement1 = new DomElement('.block', 100, 100, 'grey', 20);
    DomElement1.createdElement();

    
    
 }, false);

 
