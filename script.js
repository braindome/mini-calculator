//variabeldeklarering och länkning till HTML-element, klasser och namn

var display = document.getElementsByClassName('display')[0];
//var valNum = document.getElementsByClassName('number')[0];

var zero = document.getElementsByName('zero')[0];
var one = document.getElementsByName('one')[0];
var two = document.getElementsByName('two')[0];
var three = document.getElementsByName('three')[0];
var four = document.getElementsByName('four')[0];
var five = document.getElementsByName('five')[0];
var six = document.getElementsByName('six')[0];
var seven = document.getElementsByName('seven')[0];
var eight = document.getElementsByName('eight')[0];
var nine = document.getElementsByName('nine')[0];

var plusSign = document.getElementsByName('plus')[0];
var minusSign = document.getElementsByName('minus')[0];
var timesSign = document.getElementsByName('times')[0];
var divSign = document.getElementsByName('div')[0];
var equal = document.getElementsByName('eq')[0];
var clear = document.getElementsByName('clear')[0];

//lägger till event till klick på varje knapp

zero.addEventListener('click', clickZero);
one.addEventListener('click', clickOne);
two.addEventListener('click', clickTwo);
three.addEventListener('click', clickThree);
four.addEventListener('click', clickFour);
five.addEventListener('click', clickFive);
six.addEventListener('click', clickSix);
seven.addEventListener('click', clickSeven);
eight.addEventListener('click', clickEight);
nine.addEventListener('click', clickNine);
plusSign.addEventListener('click', clickPlus);
minusSign.addEventListener('click', clickMinus);
timesSign.addEventListener('click', clickTimes);
divSign.addEventListener('click', clickDiv);
clear.addEventListener('click', clearScreen);
equal.addEventListener('click',() => { if (display.value == '') {clearScreen()} else {operate()}});
//valNum.addEventListener('click', clickNum);
//equal.addEventListener('click', operate);

//funktioner: klicka och printa siffer och operatorer i display:n

//function clickNum() {display.value += this.value;}
function clickZero() {display.value += this.value;}
function clickOne() {display.value += this.value;}
function clickTwo() {display.value += this.value;}
function clickThree() {display.value += this.value;}
function clickFour() {display.value += this.value;}
function clickFive() {display.value += this.value;}
function clickSix() {display.value += this.value;}
function clickSeven() {display.value += this.value; }
function clickEight() {display.value += this.value;}
function clickNine() {display.value += this.value;}
function clickPlus() {display.value += this.value;}
function clickTimes() {display.value += this.value;}
function clickMinus() {display.value += this.value;}
function clickDiv() {display.value += this.value;}
function clearScreen() {display.value ='';}

//operatorfunktionen länkad till '='; eval() räknar allt som är med siffror; 
//printa resultat i display:n
function operate() {
var numbersOnDisplay = display.value;
const result = eval(numbersOnDisplay);
display.value = result;
} 
  