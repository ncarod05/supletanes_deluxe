/*Validaciones simples para el formulario de Crear Cuenta*/

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensajeRegistro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
/*Cada campo necesitara cumplir con los requisitos para hacer un registro completo*/
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const password = document.getElementById('password').value;
    const confirmar = document.getElementById('confirmar').value;

    let errores = [];

/*Validaciones es casí igual que la ventana de mi perfil, la diferencia es que las alertas saldran desde el html
ejemplo, mensaje.innerHTML*/
    if (nombre.length < 3) errores.push("El nombre debe tener al menos 3 caracteres.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errores.push("Correo electrónico inválido.");
    const telRegex = /^\+56\s?9\d{8}$/;
    if (!telRegex.test(telefono)) errores.push("Teléfono debe comenzar con +56 y tener 9 dígitos.");
    if (password.length < 6) errores.push("La contraseña debe tener al menos 6 caracteres.");
    if (password !== confirmar) errores.push("Las contraseñas no coinciden.");

    if (errores.length > 0) {
      mensaje.innerHTML = `<div class="alert alert-danger">${errores.join("<br>")}</div>`;
    } else {
      mensaje.innerHTML = `<div class="alert alert-success">Cuenta creada exitosamente 🎉</div>`;
      form.reset();
    }
  });
});