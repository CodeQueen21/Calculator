const results = document.getElementById('display').querySelector('p');
const clearBtn = document.getElementById('clear');
const signBtn = document.getElementById('sign');
const percentBtn = document.getElementById('percentage');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('addition');
const equalBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');
const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
let userInput = [];
let number = 0;
let firstUserInput;
let secondUserInput;
let content;
let secondContent;
let answer;

function divide(a,b) {
    return a / b;
}
/*
function numberChecker(arr) {
    let count = 0;
    for(let i = 0; i <= arr.length; i++) {
      if(typeof arr[i] === 'number') {
         count++;
     }
  }
  return count;
}

function decimalChecker(arr) {
    let count = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(typeof arr[i] === 'string') {
            count ++;
        }
    }
}
*/


function joinArr(arr) {
    if (arr.length > 9){
        arr.length = 9;
    }
    let joined = arr.join('');
    return joined;
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

oneBtn.addEventListener('click', () => {
    number = 1;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

twoBtn.addEventListener('click', () => {
    number = 2;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

threeBtn.addEventListener('click', () => {
    number = 3;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

fourBtn.addEventListener('click', () => {
    number = 4;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

fiveBtn.addEventListener('click', () => {
    number = 5;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

sixBtn.addEventListener('click', () => {
    number = 6;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

sevenBtn.addEventListener('click', () => {
    number = 7;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

eightBtn.addEventListener('click', () => {
    number = 8;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

nineBtn.addEventListener('click', () => {
    number = 9;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

zeroBtn.addEventListener('click', () => {
    number = 0;
    userInput.push(number);
    content = numberWithCommas(joinArr(userInput));
    results.textContent = content;
})

decimalBtn.addEventListener('click', () => {

})

divideBtn.addEventListener('click', () => {
   firstUserInput = content;
   userInput.length = 0;
})

equalBtn.addEventListener('click', () => {
secondUserInput = content;
answer = divide(firstUserInput, secondUserInput);
results.textContent = answer;
})




