const resultRound = (num) => {
    let str = String(num);
    if ((str.includes('.')) && str.split('.')[1].length > 4) return num.toFixed(4);
    return num;
}

const add = (num1, num2) => resultRound(num1 + num2);
const subtract = (num1, num2) => resultRound(num1 -num2);
const multiply = (num1, num2) => resultRound(num1 * num2);
const divide = (num1, num2) => resultRound(num1 / num2);
const percent = (num1) => resultRound((num1/100));

let firstOperand;
let secondOperand;
let operator;
let currentFunction;
let afterEqual;
let afterOperator;

const getFirstOperand = () => firstOperand = parseFloat(screen.innerText);
const getSecondOperand = () => secondOperand = parseFloat(screen.innerText);
const clearScreen = () => screen.innerText = '';

const numBtns = document.querySelectorAll('.num');
const screen = document.querySelector('#screen');
const displayNum = document.createElement('p');
const clearBtn = document.querySelector('#ac');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const percentBtn = document.querySelector('#percent');
const equalBtn = document.querySelector('#equal');
const plusMinusBtn = document.querySelector('#plus-minus');

const operatorBtns = [addBtn,subtractBtn,multiplyBtn,divideBtn];
const operatorFunctions = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
}

numBtns.forEach(
    btn => btn.addEventListener('click', (e) => {
        if (afterEqual || afterOperator) {
            clearScreen()
            afterEqual = false;
            afterOperator = false;
        }
        if (screen.innerText.length < 10) {
            screen.innerText += e.target.innerText;
        }}))

clearBtn.addEventListener('click', clearScreen)

operatorBtns.forEach(
    btn => btn.addEventListener('click', (e) => {
        getFirstOperand()
        operator = e.target.innerText;
        afterOperator = true;
    })
)

equalBtn.addEventListener('click', () => {
    getSecondOperand();
    currentFunction = operatorFunctions[operator];
    if (secondOperand == '') {
        screen.innerText = currentFunction(firstOperand, firstOperand);
    }
    screen.innerText = currentFunction(firstOperand, secondOperand);
    afterEqual = true;
    operator = '';
});

percentBtn.addEventListener('click', () => {
    getFirstOperand();
    screen.innerText = percent(firstOperand);
})

plusMinusBtn.addEventListener('click', () => {
    getFirstOperand();
    if (firstOperand < 0) {
        firstOperand = -firstOperand;
    }
    else {
        firstOperand = -firstOperand;
    }
    screen.innerText = firstOperand;
})
