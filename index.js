/*let first_count = document.querySelector('.first');
console.log(first_count);
let second_count = document.querySelector('.second');
console.log(first_count);
let result = document.querySelector('.result');


const plus_btn = document.querySelector('.plus');
const minus_btn = document.querySelector('.minus');
const multi_btn = document.querySelector('.multiplication');
const division_btn = document.querySelector('.division');


plus_btn.addEventListener('click', function () {
    result.innerHTML = Number(first_count.value) + Number(second_count.value);
    console.log(result);
});

function minus() {
    minus_btn.addEventListener('click', function () {
        result.innerHTML = first_count.value - second_count.value;
        console.log(result)
        return result;
    });
}
function multi() {
    multi_btn.addEventListener('click', function () {
        result.innerHTML = first_count.value * second_count.value;
        console.log(result)
        return result;
    });
}
function division() {
    division_btn.addEventListener('click', function () {
        result.innerHTML = first_count.value / second_count.value;
        console.log(result)
        return result;
    });
}*/

let count_display = [];

let monitor = document.querySelector('.input_container');
let symbols = document.querySelectorAll('.symbol');

symbols.forEach(symbol => {
    symbol.addEventListener('click', function () {
        count_display.push(symbol.dataset.value);
        monitor.innerHTML = count_display.join(' ');
        console.log(symbol);
        console.log(count_display);
    })
})

