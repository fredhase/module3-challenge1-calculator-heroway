const input1 = document.getElementById('entrada-1');
const input2 = document.getElementById('entrada-2');
const btnClear = document.getElementById('btn-clear');
const btnSum = document.getElementById('btn-soma');
const btnSub = document.getElementById('btn-subtracao');
const btnMul = document.getElementById('btn-multiplicacao');
const btnDiv = document.getElementById('btn-divisao');
const resultEl = document.getElementById('resultado');
const errorSpc = document.getElementById('error')

let value1, value2;

btnSum.addEventListener('click', () => {
  value1 = Number(input1.value);
  value2 = Number(input2.value);
  const result = value1 + value2;
  isNaN(result);
});

btnSub.addEventListener('click', () => {
  value1 = Number(input1.value);
  value2 = Number(input2.value);
  const result = value1 - value2;
  isNaN(result);
});

btnMul.addEventListener('click', () => {
  value1 = Number(input1.value);
  value2 = Number(input2.value);
  const result = value1 * value2;
  isNaN(result);
});

btnDiv.addEventListener('click', () => {
  value1 = Number(input1.value);
  value2 = Number(input2.value);
  if(value2 == 0){
    resultEl.innerText = '#ERROR!';
    resultEl.style.color = 'DarkOrange';
    errorSpc.innerText = 'CANT DIVIDE BY ZERO';
  } else {
    const result = value1 / value2;
    isNaN(result);
  }  
});

function isNaN(result) {
  const isNaN = Number.isNaN(result);
  if (isNaN){
    resultEl.innerText = '#ERROR!';
    resultEl.style.color = 'DarkOrange';
    errorSpc.innerText = 'NUMBERS ONLY!';
  } else {
    resultEl.innerText = result;
    resultEl.style.color = 'white';
    errorSpc.innerText = "";
  }
}

btnClear.addEventListener('click', () => {
  input1.value = "";
  input2.value = "";
  resultEl.innerText = "";
  errorSpc.innerText = "";
});