var display = document.getElementsByClassName('display')[0];
var clickNum = document.getElementsByClassName('number')[0];

var seven = document.getElementsByName('seven')[0];
var eight = document.getElementsByName('eight')[0];
var nine = document.getElementsByName('nine')[0];
var four = document.getElementsByName('four')[0];
var five = document.getElementsByName('five')[0];
var six = document.getElementsByName('six')[0];
var one = document.getElementsByName('one')[0];
var two = document.getElementsByName('two')[0];
var three = document.getElementsByName('three')[0];
var zero = document.getElementsByName('zero')[0];
var plusSign = document.getElementsByName('plus')[0];
var minusSign = document.getElementsByName('minus')[0];
var timesSign = document.getElementsByName('times')[0];
var divSign = document.getElementsByName('div')[0];
var equal = document.getElementsByName('eq')[0];
var clear = document.getElementsByName('clear')[0];

seven.addEventListener('click', clickSeven);
eight.addEventListener('click', clickEight);
nine.addEventListener('click', clickNine);
four.addEventListener('click', clickFour);
five.addEventListener('click', clickFive);
six.addEventListener('click', clickSix);
one.addEventListener('click', clickOne);
two.addEventListener('click', clickTwo);
three.addEventListener('click', clickThree);
zero.addEventListener('click', clickZero);
plusSign.addEventListener('click', clickPlus);
minusSign.addEventListener('click', clickMinus);
timesSign.addEventListener('click', clickTimes);
divSign.addEventListener('click', clickDiv);
clear.addEventListener('click', clearScreen);
//equal.addEventListener('click', operate);
equal.addEventListener('click',() => { if (display.value == '') {clearScreen()} else {operate()}});

function clickSeven() {
    display.value += this.value; 
}

function clickEight() {
    display.value += this.value;
}

function clickNine() {
    display.value += this.value;
}

function clickFour() {
    display.value += this.value;
}

function clickFive() {
    display.value += this.value;
}

function clickSix() {
    display.value += this.value;
}

function clickOne() {
    display.value += this.value;
}

function clickTwo() {
    display.value += this.value;
}

function clickThree() {
    display.value += this.value;
}

function clickZero() {
    display.value += this.value;
}

function clickPlus() {
    display.value += this.value;
}

function clickTimes() {
    display.value += this.value;
}

function clickMinus() {
    display.value += this.value;
}

function clickDiv() {
    display.value += this.value;
}

function clearScreen() {
    display.value ='';
}

function operate() {
var numbersOnDisplay = display.value;
const result = eval(numbersOnDisplay);
display.value = result;
Object.freeze(result);
}



 
  