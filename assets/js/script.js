const passwordBox = document.getElementById("password");
const lenghtInput = document.getElementById("input-lenght");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{][></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  if (lenghtInput.value == "") {
    alert("Debes escribir la longitud!");
    return;
  } else if (lenghtInput.value < 4) {
    alert("Debe ser mayor a 4");
    return;
  } else if (lenghtInput.value > 15) {
    alert("Debe ser menor a 15!");
    return;
  } else {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenghtInput.value > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
  }
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}