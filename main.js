const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const error = document.querySelector("#error");

form.addEventListener("submit", (event) => {
  const email = emailInput.value;
  if (!emailRegex.test(email)) {
    event.preventDefault();
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
});
