const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("login");

function allString(firstName, lastName, email, password) {
  return `Hello ${firstName} ${lastName}.Your email is: ${email}.Password ${password} is securely saved!`;
}

btn.addEventListener("click", function () {
  const firstName = nameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  const result = allString(firstName, lastName, email, password);

  console.log(result);

  const print = document.getElementById("string");
  print.textContent = result;

  nameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput = "";
});
