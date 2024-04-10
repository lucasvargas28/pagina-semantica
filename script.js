document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var nombre = document.getElementById('nombre').value.trim();
  var edad = document.getElementById('edad').value.trim();
  var correo = document.getElementById('correo').value.trim();

  if (nombre === '' || edad === '' || correo === '') {
    displayErrorMessage('Todos los campos son obligatorios.');
    return;
  }

  if (isNaN(edad)) {
    displayErrorMessage('La edad debe ser un número.');
    return;
  }

  if (!isValidEmail(correo)) {
    displayErrorMessage('El correo electrónico no tiene un formato válido.');
    return;
  }

  alert('Inicio de sesión exitoso.');
});

function displayErrorMessage(message) {
  var errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message;
}

function isValidEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
