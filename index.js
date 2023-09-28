function validarCorreo() {
  var emailInput = document.getElementById('email');
  var emailValue = emailInput.value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(emailValue);
}

document.getElementById('btn_enviar').addEventListener('click', function(event) {
  var esCorreoValido = validarCorreo();

  if (!esCorreoValido) {
      event.preventDefault(); // Evita que el formulario se envíe si el correo no es válido
      mostrarMensajeError();
      resaltarCampoInvalido();
  }else if (esCorreoValido){
    window.location.href = './mensaje.html'; // Cambia 'pagina_destino.html' por la URL de la página a la que quieres redirigir
  }
});


function mostrarMensajeError() {
  var mensajeError = document.getElementById('mensaje_error');
  mensajeError.style.display = 'block';
 
}

function resaltarCampoInvalido() {
  var emailInput = document.getElementById('email');
  emailInput.classList.add('campo_invalido');
}

// Agregamos un evento para quitar el resaltado cuando el usuario comience a corregir el campo
document.getElementById('email').addEventListener('input', function() {
  var emailInput = document.getElementById('email');
  emailInput.classList.remove('campo_invalido');

  var mensajeError = document.getElementById('mensaje_error');
  mensajeError.style.display = 'none';
});

