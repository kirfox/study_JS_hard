'use strict'
//output days of week
let lang = prompt('Вывести дни недели на русском (ru) или на английском (en)?');

//with help if
if (lang === 'ru') {
    console.log('if: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('if: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('Введено неверное значение');
}

//with help switch
switch (lang) {
    case 'ru':
        console.log('switch: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('switch: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default:
        console.log('Введено неверное значение');
        break; 
}

//with help multidimensional array
let multi_array= [
    ['multi_array: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'], 
    ['multi_array: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
    ['Введено неверное значение']
];
let result = lang === 'ru' ? multi_array[0] :
    lang === 'en' ? multi_array[1] :
    'Введено неверное значение';
console.log(result);


//identification by name
let namePerson = prompt('Как тебя зовут?');
let result2 = namePerson === 'Артем' ? 'Директор' : 
    namePerson === 'Максим' ? 'Преподаватель' :
    'Студент';
console.log(result2);