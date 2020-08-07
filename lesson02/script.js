let num = 266219,
    arrNum = num.toString().split('').map(Number),
    product = 1,
    res;

// get product of number
for (let index = 0; index < arrNum.length; index++) {
    product *= arrNum[index];
} 
// exponentiation product
product = product ** 3;
// get two first numbers
res = product.toString().substr(0,2);
alert("Первые две цифры " + res);


