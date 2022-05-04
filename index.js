let result = document.querySelector('.calc-display');
let innerDisplay = document.querySelector('.calc-innerdisplay');
let displaynum = '';
let newDisplayVal = '';
let total = '';
let operators = ['+', '-', '*', '/', '.', '%', '^', '√'];
let percentageVal = '';
innerDisplay.textContent = '0';

function displayValue(val) {
  let currentValue = val.value;
  innerDisplay.innerHTML += val.value;
  // let lastValue = displaynum.slice(-1);
  if (
    operators.includes(displaynum.length - 1) &&
    operators.includes(currentValue)
  ) {
    let replaceOprator = displaynum.slice(0, displaynum.length - 1);
    displaynum = replaceOprator;
  } else if (displaynum.includes('(') && displaynum.includes(')')) {
    total = eval(displaynum);
    result.innerHTML = total;
  } else if (currentValue === '%' || newDisplayVal.length - 1 === '%') {
    percentageVal = newDisplayVal.split(/[+*/-]+/).reverse().join('+').substring(3);
    let newResult = eval(percentageVal);
    let nextResult = '';
    nextResult = (newResult * newDisplayVal.slice(-3)) / 100;
    total = newResult + nextResult;
  }
  // else if (currentValue === '%') {
  //   console.log("last",currentValue);
  //   total = newDisplayVal / 100;
  //   result.innerHTML = total;
  // } 
  else if (displaynum.includes('√') && displaynum.length - 1 === '√') {
    total =
      eval(displaynum.slice(0, displaynum.length - 1)) * Math.sqrt(currentValue);
    result.innerHTML = total;
  }

  innerDisplay.innerHTML = displaynum += currentValue;
  newDisplayVal = displaynum;
  innerDisplay.innerHTML = displaynum.toString();
  if (!operators.includes(displaynum.slice(-1))) {
    total = eval(displaynum);
  }
  result.innerHTML = total.toString().includes('.') ? total.toFixed(6) : total;
  let arrayVal = newDisplayVal.split(/[+*/-]+/);
  console.log('array', arrayVal);

  // if (displaynum.length - 1 === '%') {
  //   let newPerVal = percentageVal * currentValue;
  //   result.innerHTML = newPerVal;
  // } 
  if (newDisplayVal.includes('^')) {
    let powerVal = newDisplayVal.split('^')[0] ** newDisplayVal.split('^')[1];
    result.innerHTML = powerVal;
  }
  // else if (newDisplayVal.includes('√')) {
  //   let rootValue = newDisplayVal.split('√')
  //   console.log("root",rootValue);
  // }
}

function equalTo() {
  innerDisplay.innerHTML = total.toString().includes('.') ?
    total.toFixed(6) :
    total;
  displaynum = total.toString();
  result.innerHTML = '';
}

function clearValue() {
  innerDisplay.innerHTML = '';
  result.innerHTML = '';
  displaynum = '';
  innerDisplay.textContent = '0';
}

function deleteFunction() {
  let displayData = innerDisplay.innerHTML.slice(
    0,
    innerDisplay.innerHTML.length - 1
  );
  // innerDisplay.innerHTML = displayData;
  innerDisplay.innerHTML = displayData ?.toString() || '0';
  if (!operators.includes(displayData.slice(-1))) {
    total = eval(displayData);
  }
  result.innerHTML = total ?.toString() || '';
  // result.innerHTML = total;
  displaynum = displayData;
}