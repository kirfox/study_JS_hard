'usestrict';

console.log('1 задание');

let arr = ['558437689','9458967893275','241498461','484864651651861','89745613464','2486468616489','968741314894'];

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    
    if (element.startsWith('2') || element.startsWith('4')) {
        console.log(element);
    } 
    
}



console.log('');
console.log('2 задание');

a:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue a; 
  }

  console.log( i  + ': делители этого числа: ' + 1 + ', ' + i);
}