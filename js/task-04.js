let counterValue = 0;

const value = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener("click", onBtnDecrementClick);
btnIncrement.addEventListener("click", onBtnIncrementClick);

function onBtnDecrementClick() {
  value.textContent = counterValue -= 1;
}

function onBtnIncrementClick() {
  value.textContent = counterValue += 1;
}
