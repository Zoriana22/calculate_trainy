const first_count = document.querySelector('first');
const second_count = document.querySelector('second');
const result = document.querySelector('result');

const plus_btn = document.querySelector('plus');
const minus_btn = document.querySelector('minus');
const multi_btn = document.querySelector('multiplication');
const division_btn = document.querySelector('division');

function sum() {
    plus_btn.addEventListener('click', function () {
        result.innerHTML = first_count.value + second_count.value;
        console.log(result)
        return result;
    });
}
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
} 
sum();
minus();
multi();
division();