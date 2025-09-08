/*Validaciones de rellenado simples*/
/* Para su debida ejecucion el scipt debe contenerse dentro del DOMContentLoaded*/

document.addEventListener('DOMContentLoaded', () => {
  const editarBtn = document.getElementById('editarPerfil');
  const guardarBtn = document.getElementById('guardarCambios');
  const inputs = document.querySelectorAll('.usuario-card input');

  editarBtn.addEventListener('click', () => {
    inputs.forEach(input => input.removeAttribute('disabled'));
    editarBtn.classList.add('d-none');
    guardarBtn.classList.remove('d-none');
  });

  /*Boton Guardar, solo estara disponible si primero se hace click en editar*/
  guardarBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();

    let errores = [];

    /*Validaciones, esto es un poco obvio, las alertas saltaran desde el navegador, no desde la pagina*/
    if (nombre.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errores.push("El correo electrónico no es válido.");
    }

    const telefonoRegex = /^\+56\s?9\d{8}$/;
    if (!telefonoRegex.test(telefono)) {
      errores.push("El teléfono debe comenzar con +56 y tener 9 dígitos.");
    }

    if (direccion === "") {
      errores.push("La dirección no puede estar vacía.");
    }

    if (errores.length > 0) {
      alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
      return;
    }

    // Si todo está bien
    inputs.forEach(input => input.setAttribute('disabled', true));
    guardarBtn.classList.add('d-none');
    editarBtn.classList.remove('d-none');
    alert('Cambios guardados correctamente');
  });

  /*Esto me ayuda a revisar la consola del navegador, para ver si el js esta cargado*/
  console.log("usuario.js cargado");
});