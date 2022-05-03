let result = document.querySelector('.calc-innerdisplay');
let innerDisplay = document.querySelector('.calc-display');
let displaynum = '';
let total = '';
let operators = ['+', '-', '*', '/', '.', '%', '^', '√'];
let percentageVal = '';
innerDisplay.textContent = "0";

function displayValue(val) {
  let currentValue = val.value;
  let lastValue = displaynum.slice(-1);
  try {
    if (operators.includes(lastValue) && operators.includes(currentValue)) {
      let replaceOprator = displaynum.slice(0, displaynum.length - 1);
      displaynum = replaceOprator;
    }
    // if (displaynum.includes('(') || displaynum.includes(')')) {
    //   total = eval(displaynum);
    //   console.log("((",total);
    //   result.innerHTML = total;
    // }
    if (currentValue === '%') {
      total = total / 100;
      percentageVal = total;
    }
    if (displaynum.includes('^')) {
      total = Math.pow(total, currentValue);
      result.innerHTML = total;
      displaynum = total.toString();
      console.log("first", displaynum);
      return;
    }

    if (displaynum === "√" && lastValue === "√") {
      total = Math.sqrt(currentValue);
      result.innerHTML = total;
    }
    // else{
    //   total = eval(displaynum.slice(0, displaynum.length -1)) * Math.sqrt(currentValue);
    //   result.innerHTML = total;
    // }
  } catch (err) {
    alert(err + 'error');
    console.error(err);
  }
  displaynum += currentValue;
  innerDisplay.innerHTML = displaynum.toString();
  if (!operators.includes(displaynum.slice(-1))) {
    total = eval(displaynum);
  }
  result.innerHTML = total.toString().includes('.') ? total.toFixed(6) : total;
  // console.log("string", displaynum);


  if (lastValue === '%') {
    let newPerVal = percentageVal * currentValue;
    result.innerHTML = newPerVal;
  }

}



function equalTo() {
  innerDisplay.innerHTML = total.toString().includes('.') ? total.toFixed(6) : total;
  displaynum = total.toString();
  result.innerHTML = '';
}

function clearValue() {
  innerDisplay.innerHTML = '';
  result.innerHTML = '';
  displaynum = '';
  innerDisplay.textContent = "0";
}

function deleteFunction() {
  let displayData = innerDisplay.innerHTML.slice(0, innerDisplay.innerHTML.length - 1);
  innerDisplay.innerHTML = displayData?.toString() || "0";
  result.innerHTML = eval(displayData)?.toString() || "";
  displaynum = "";
}