let result = document.querySelector('.calc-display');
let innerDisplay = document.querySelector('.calc-innerdisplay');
let displayNum = '';
let newDisplayVal = '';
let total = '';
let operators = ['+', '-', '*', '/', '.', '%', '^', '√'];
let percentageVal = '';
innerDisplay.textContent = '0';

function displayValue(val) {
  let currentValue = val.value;
  innerDisplay.innerHTML += val.value;
  if (
    operators.includes(displayNum.length - 1) &&
    operators.includes(currentValue)
  ) {
    let replaceOprator = displayNum.slice(0, displayNum.length - 1);
    displayNum = replaceOprator;
  } else if (displayNum.includes('(') && displayNum.includes(')')) {
    total = eval(displayNum);
    result.innerHTML = total;
  } else if (currentValue === '%' || newDisplayVal.length - 1 === '%') {
    if (newDisplayVal.split('').slice(0, 3).includes('+')) {
      percentageVal = newDisplayVal
        .split(/[+*/-]+/)
        .join('+')
        .slice(0, 3);
      let newResult = eval(percentageVal);
      let nextResult = '';
      nextResult = (newResult * newDisplayVal.slice(-2)) / 100;
      total = newResult + nextResult;
    } else if (newDisplayVal.split('').slice(0, 3).includes('-')) {
      percentageVal = newDisplayVal
        .split(/[+*/-]+/)
        .join('-')
        .slice(0, 3);
      let newResult = eval(percentageVal);
      let nextResult = '';
      nextResult = (newResult * newDisplayVal.slice(-2)) / 100;
      total = newResult + nextResult;
    } else if (newDisplayVal.split('').slice(0, 3).includes('*')) {
      percentageVal = newDisplayVal
        .split(/[+*/-]+/)
        .join('*')
        .slice(0, 3);
      let newResult = eval(percentageVal);
      let nextResult = '';
      nextResult = (newResult * newDisplayVal.slice(-2)) / 100;
      total = newResult + nextResult;
    } else if (newDisplayVal.split('').slice(0, 3).includes('/')) {
      percentageVal = newDisplayVal
        .split(/[+*/-]+/)
        .join('/')
        .slice(0, 3);
      let newResult = eval(percentageVal);
      let nextResult = '';
      nextResult = (newResult * newDisplayVal.slice(-2)) / 100;
      total = newResult + nextResult;
    } else if (currentValue === '%') {
      console.log('last', currentValue);
      total = newDisplayVal / 100;
      result.innerHTML = total;
    }
  } else if (displayNum.includes('√') && displayNum.length - 1 === '√') {
    total =
      eval(displayNum.slice(0, displayNum.length - 1)) *
      Math.sqrt(currentValue);
    result.innerHTML = total;
  }
  innerDisplay.innerHTML = displayNum += currentValue;
  newDisplayVal = displayNum;
  innerDisplay.innerHTML = displayNum.toString();
  if (!operators.includes(displayNum.slice(-1))) {
    total = eval(displayNum);
  }
  result.innerHTML = total.toString().includes('.') ? total.toFixed(6) : total;
  if (newDisplayVal.includes('^')) {
    let powerVal = newDisplayVal.split('^')[0] ** newDisplayVal.split('^')[1];
    result.innerHTML = powerVal;
  }
}

function equalTo() {
  innerDisplay.innerHTML = total.toString().includes('.')
    ? total.toFixed(6)
    : total;
  displayNum = total.toString();
  result.innerHTML = '';
}
function clearValue() {
  innerDisplay.innerHTML = '';
  result.innerHTML = '';
  displayNum = '';
  innerDisplay.textContent = '0';
}
function deleteFunction() {
  let displayData = innerDisplay.innerHTML.slice(
    0,
    innerDisplay.innerHTML.length - 1
  );
  innerDisplay.innerHTML = displayData?.toString() || '0';
  if (!operators.includes(displayData.slice(-1))) {
    total = eval(displayData);
  }
  result.innerHTML = total?.toString() || '';
  displayNum = displayData;
}
