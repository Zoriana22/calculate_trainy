
let count_display = [];
let result_display = [];
let result = document.querySelector('.result');
let number_input = document.querySelector('.number_input');
let a = '';
let b = '';
let finish_result = 0;
let numbers = document.querySelectorAll('.number');

const del_btn = document.getElementById('del');
const clear_btn = document.getElementById('clear');
const minus_btn = document.getElementById('minus');
const result_sing = document.getElementById('result_sing');
console.log(result_sing);
numbers.forEach(number => {
        number.addEventListener('click', function () {
        
            count_display.push(number.dataset.value);
            result.innerHTML = count_display.join('');
            console.log(count_display);
        })
})

minus_btn.addEventListener('click', function() {
    a = count_display.join('');
    number_input.innerHTML = result.innerHTML + "-";
    result.innerHTML = '';
    count_display = [];
    
    console.log(number_input);
    console.log(result);
    console.log(a);
})

result_sing.addEventListener('click', function() {
    b = count_display.join('');
    console.log(b);
    finish_result = a - b;
    console.log(finish_result); 
    result_display.push(finish_result);
    result.innerHTML = finish_result;
})

del_btn.addEventListener('click', function () {
    count_display.pop();
    console.log(count_display);
    result.innerHTML = count_display.join('');
})

clear_btn.addEventListener('click', function () {
    result.innerHTML = '';
    count_display = [];
})



