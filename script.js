const inputTemp = document.querySelector('.input-temp');
const convertBtn = document.querySelector('.convert-btn');
const tempType = document.querySelector('.select-temp');
const result = document.querySelector('.result');

convertBtn.addEventListener('click', () => {
  
  if (tempType.value === 'fahrenheit') {
    result.innerHTML = `°C${((inputTemp.value - 32) * 5 / 9).toFixed(2)}`
  } else if (tempType.value === 'celsius') {
    result.innerHTML = `°F${(inputTemp.value * (9 / 5) + 32).toFixed(2)}`
  }
})