const inputTemp = document.querySelector('.input-temp');
const convertBtn = document.querySelector('.convert-btn');
const tempType = document.querySelector('.select-temp');
const result = document.querySelector('.result');

convertBtn.addEventListener('click', () => {
  let calculatedTemp;
  
  if (tempType.value === 'fahrenheit') {
    calculatedTemp = ((inputTemp.value - 32) * 5 / 9)
  } else if (tempType.value === 'celsius') {
    calculatedTemp = (inputTemp.value * (9 / 5) + 32)
  }

  calculatedTemp = calculatedTemp % 1 === 0 ? Math.round(calculatedTemp) : calculatedTemp.toFixed(2);

  result.innerHTML = `°${tempType.value === 'fahrenheit' ? 'C ' : 'F '}${calculatedTemp}`;
})