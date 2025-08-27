function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');

btn.addEventListener('click', colorChange);

function colorChange(event) {
  const body = document.querySelector('body');
  const span = document.querySelector('.color');
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
  span.style.color = color;
}

