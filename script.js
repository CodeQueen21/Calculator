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
let number;

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
    results.textContent = numberWithCommas(joinArr(userInput));
})

twoBtn.addEventListener('click', () => {
    number = 2;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

threeBtn.addEventListener('click', () => {
    number = 3;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

fourBtn.addEventListener('click', () => {
    number = 4;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

fiveBtn.addEventListener('click', () => {
    number = 5;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

sixBtn.addEventListener('click', () => {
    number = 6;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

sevenBtn.addEventListener('click', () => {
    number = 7;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

eightBtn.addEventListener('click', () => {
    number = 8;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

nineBtn.addEventListener('click', () => {
    number = 9;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})

zeroBtn.addEventListener('click', () => {
    number = 0;
    userInput.push(number);
    results.textContent = numberWithCommas(joinArr(userInput));
})
 



