const validation = document.querySelector("#validation-input");

validation.addEventListener("blur", onValidationBlur);

function onValidationBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}
