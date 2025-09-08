document.addEventListener('DOMContentLoaded', () => {
  const botonesQuitar = document.querySelectorAll('.btn-outline-danger');

  botonesQuitar.forEach(boton => {
    boton.addEventListener('click', () => {
      const card = boton.closest('.col-md-4');
      if (card) {
        card.remove();
      }
    });
  });
});
