document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {

        const result = new Promise((resolve, reject) => {

            fetch('./cars.json')
            .then(result => result.json())
            .then((result) => {
           
                const data = result.cars.find(item => item.brand === select.value);

                if (!data) {
                   return reject();
                }
                const {brand, model, price} = data;
                resolve(`Тачка ${brand} ${model} <br> Цена: ${price}$`);
            });

        });

        result.then(res => {
            output.innerHTML = res;
        }).catch(err => {
            output.innerHTML = 'Произошла ошибка';
            console.error('Произошла ошибка');
        });

    });

});