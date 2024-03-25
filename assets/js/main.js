document.getElementById("myForm").addEventListener("submit", function (event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  if (name === "") {
    nameError.textContent = "Please enter the name of this field";
    event.preventDefault();
  } else {
    nameError.textContent = "";
  }

  if (email === "") {
    emailError.textContent = "Please enter the email of this field";
    event.preventDefault();
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Please enter email in correct format";
    event.preventDefault();
  } else {
    emailError.textContent = "";
  }

  if (password === "") {
    passwordError.textContent = "Please enter the password of this field";
    event.preventDefault();
  } else {
    passwordError.textContent = "";
  }
});

// Hàm kiểm tra định dạng email
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidateName(name) {
  var nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(name);
}
