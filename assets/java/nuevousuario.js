/*Validaciones simples para el formulario de Crear Cuenta*/

document.addEventListener('DOMContentLoaded', () => {
  const campos = {
    nombre: document.getElementById('nombre'),
    apellido: document.getElementById('apellido'),
    email: document.getElementById('email'),
    telefono: document.getElementById('telefono'),
    password: document.getElementById('password'),
    confirmar: document.getElementById('confirmar')
  };

  const form = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensajeRegistro');

  // Expresiones regulares
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telRegex = /^\+56\s?9\d{8}$/;

  //Escuchar en tiempo real 
  Object.values(campos).forEach(campo => {
    campo.addEventListener('input', () => {
      validarIndividual(campo);
    });
  });

  // Función de validación individual
  function validarIndividual(campo) {
    let valido = false;
    let mensaje = '';

    switch (campo.id) {
      case 'nombre':
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
        valido = nombreRegex.test(campo.value.trim());
        mensaje = 'El nombre debe tener al menos 3 caracteres y solo letras.';
        break;

      case 'apellido':
        const apellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
        valido = apellidoRegex.test(campo.value.trim());
        mensaje = 'El apellido debe tener al menos 3 caracteres y solo letras.';
        break;

      case 'email':
        valido = emailRegex.test(campo.value.trim());
        mensaje = 'Correo electrónico inválido.';
        break;

      case 'telefono':
        valido = telRegex.test(campo.value.trim());
        mensaje = 'Teléfono debe comenzar con +56 y tener 9 dígitos.';
        break;

      case 'password':
        valido = campo.value.length >= 6;
        mensaje = 'La contraseña debe tener al menos 6 caracteres.';
        // Validar confirmar automáticamente si cambia password
        validarIndividual(campos.confirmar);
        break;

      case 'confirmar':
        valido = campo.value === campos.password.value && campos.password.value.length >= 6;
        mensaje = 'Las contraseñas no coinciden.';
        break;

      default:
        valido = true;
        mensaje = '';
    }

    // Mostrar borde y mensaje
    const msgElem = campo.nextElementSibling;
    if (valido) {
      campo.classList.add('is-valid');
      campo.classList.remove('is-invalid');
      if (msgElem) msgElem.textContent = '';
    } else {
      campo.classList.add('is-invalid');
      campo.classList.remove('is-valid');
      if (msgElem) msgElem.textContent = mensaje;
    }

    return valido;
  }

  // Validar todos los campos
  function validarFormulario() {
    const todosValidos = Object.values(campos).every(campo => validarIndividual(campo));
    return todosValidos;
  }

  // Envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validarFormulario()) return; // Evita enviar si hay errores

    // Mostrar mensaje de éxito
    mensaje.innerHTML = `<div class="alert alert-success">Cuenta creada exitosamente 🎉</div>`;
    mensaje.classList.remove('d-none');

    // Limpiar bordes verdes/rojos
    Object.values(campos).forEach(campo => {
      campo.classList.remove('is-valid', 'is-invalid');
    });

    // Limpiar formulario después de 4s
    setTimeout(() => {
      mensaje.classList.add('d-none');
      form.reset();
    }, 4000);
  });
});