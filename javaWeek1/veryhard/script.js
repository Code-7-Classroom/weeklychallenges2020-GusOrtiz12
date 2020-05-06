var num1 = parseInt(prompt ("enter a number"));
var operator = prompt("please enter an operator");
var num2 = parseInt(prompt ("enter another number"));


if (operator === '+'){
  console.log(num1 +  +  num2 + ' = ' + add(num1, num2));
} else if (operator === '-'){
  console.log(num1 +operator + num2 + ' = ' + subtract(num1, num2));
} else if (operator === '*'){
  console.log(num1 + operator + num2 + ' = ' + multiply(num1, num2));
} else if (operator == '/'){
  console.log(num1 + operator + num2 + ' = ' + divide(num1,  num2));
}


function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2){
  return num1 / num2;
}
