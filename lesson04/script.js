'usestrict';

let input = prompt("Введите текст" ,' aaaaaaaaaaaaaaaacbbbbbbb   ');

let proizvol = function(text) {    
    if (typeof text !== 'string') {

        console.log('В качестве аргумента передана не строка!');

    } else if (text.trim().length > 30){

        return text.trim().substring(0, 30) + '...';

    } else{

        return text.trim();
        
    }
};

//with prompt
console.log(proizvol(input));

//without prompt
console.log(proizvol('   aaaaaaaaaaaaaaaaaaaaaaaaaaaaacacbbbbbbb   '));