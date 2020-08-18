let display = document.getElementById('display');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let zero = document.getElementById('0');
let dot = document.getElementById('dot');
let eq = document.getElementById('eq');
let del = document.getElementById('del');
let div = document.getElementById('div');
let mul = document.getElementById('mul');
let sub = document.getElementById('sub');
let add = document.getElementById('add');

let operand1 = '0';
let operator = '';
let operand2 = '0';

function show(val) {
    display.innerHTML += val;
}
function remove(val) {
    display.innerHTML - val;
}
function multiply() {
    operand1 = display.innerHTML;
    display.innerHTML = '';
    operator = '*';
}
function divide() {
    operand1 = display.innerHTML;
    display.innerHTML = '';
    operator = '/';
}
function addition() {
    operand1 = display.innerHTML;
    display.innerHTML = '';
    operator = '+';
}
function subtraction() {
    operand1 = display.innerHTML;
    display.innerHTML = '';
    operator = '-';
}
function eql() {
    operand2 = display.innerHTML;
    if (operator == '*') {
        let output = operand1 * operand2;
        display.innerHTML = output;
    }
    else if (operator == '+') {
        let output = operand1 + operand2;
        display.innerHTML = output;
    }
    else if (operator == '-') {
        let output = operand1 - operand2;
        display.innerHTML = output;
    }
    else if (operator == '/') {
        let output = operand1 / operand2;
        display.innerHTML = output;
    }
}

seven.addEventListener ('click', function() {show(7);});
eight.addEventListener ('click', function() {show(8);});
nine.addEventListener ('click', function() {show(9);});
four.addEventListener ('click', function() {show(4);});
five.addEventListener ('click', function() {show(5);});
six.addEventListener ('click', function() {show(6);});
one.addEventListener ('click', function() {show(1);});
two.addEventListener ('click', function() {show(2);});
three.addEventListener ('click', function() {show(3);});
mul.addEventListener ('click', function() {multiply();});
add.addEventListener ('click', function() {addition();});
sub.addEventListener ('click', function() {subtraction();});
div.addEventListener ('click', function() {divide();});
eq.addEventListener ('click', function() {eql();});
zero.addEventListener ('click', function() {show(0);});