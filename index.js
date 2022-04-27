let result = document.querySelector(".calc-display");
let innerResult = document.querySelector(".calc-innerdisplay");
let displaynum = "";
let Total = "";
// let buttonValue = this.innerHTML;
let operators = ['+', '-', 'x', '÷'];
// var buttons = document.getElementsByClassName("calc-keys");
// console.log(buttons,"kk");

function displayValue(val) {
  displaynum += val.value;
  result.innerHTML = displaynum.toString();
  console.log(displaynum, "test");
  Total = eval(displaynum);
  innerResult.innerHTML = Total;
}

function equalTo() {
  result.innerHTML = Total;
  innerResult.innerHTML = "";
  displaynum = ""
}

function clearValue() {
  result.innerHTML = "";
  innerResult.innerHTML = "";
  displaynum = ""
}

function deleteFunction() {
  let displayData = result.innerHTML.slice(0, result.innerHTML.length - 1);
  result.innerHTML = displayData;
  displaynum = ""
  console.log(displayData, "del");
}