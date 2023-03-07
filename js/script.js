const baseFontSizeInput = document.getElementById('input-base');
const pixelValueInput = document.getElementById('input-px');
const remValueInput = document.getElementById('input-rem');

const convertPxToRem = (pixelValue, baseFontSize) => {
  return isNaN(baseFontSize) || isNaN(pixelValue)
    ? ''
    : pixelValue / baseFontSize;
};

const convertRemToPx = (remValue, baseFontSize) => {
  return isNaN(baseFontSize) || isNaN(remValue) ? '' : remValue * baseFontSize;
};

const calculateConversion = () => {
  const baseFontSize = +baseFontSizeInput.value;
  const pixelValue = +pixelValueInput.value;
  const remValue = +remValueInput.value;

  if (pixelValueInput.value.length !== 0) {
    remValueInput.value = convertPxToRem(pixelValue, baseFontSize);
  } else if (remValueInput.value.length !== 0) {
    pixelValueInput.value = convertRemToPx(remValue, baseFontSize);
  } else {
    pixelValueInput.value = '';
    remValueInput.value = '';
  }
};

pixelValueInput.addEventListener('input', calculateConversion);
remValueInput.addEventListener('input', calculateConversion);
baseFontSizeInput.addEventListener('input', calculateConversion);
