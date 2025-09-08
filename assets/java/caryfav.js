//Se agrega validacion de agregar a carrito y agregar a favoritos
document.addEventListener('DOMContentLoaded', () => {
  const btnAgregarCarrito = document.querySelector('button.btn-success');
  const btnAgregarDeseos = document.querySelector('button.btn-outline-danger');

  btnAgregarCarrito.addEventListener('click', () => {
    alert('Producto agregado al carrito.');
  });

  btnAgregarDeseos.addEventListener('click', () => {
    alert('Producto agregado a la lista de deseos.');
  });
});
