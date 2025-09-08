document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cartItems');
  const totalCarrito = document.getElementById('totalCarrito');
  const btnComprar = document.getElementById('btnComprar');
  const cartCount = document.getElementById('cartCount');

  function actualizarSubtotales() {
    let total = 0;
    cartItems.querySelectorAll('tr').forEach(row => {
      const inputCantidad = row.querySelector('.cantidad');
      const precioUnitario = parseInt(inputCantidad.dataset.precio);
      const cantidad = parseInt(inputCantidad.value);
      const subtotal = precioUnitario * cantidad;
      row.querySelector('.subtotal').textContent = `$${subtotal.toLocaleString()}`;
      total += subtotal;
    });
    totalCarrito.textContent = `$${total.toLocaleString()}`;
    cartCount.textContent = cartItems.querySelectorAll('tr').length;
  }

  cartItems.addEventListener('input', e => {
    if (e.target.classList.contains('cantidad')) {
      if (e.target.value < 1) e.target.value = 1;
      actualizarSubtotales();
    }
  });

  cartItems.addEventListener('click', e => {
    if (e.target.closest('.btn-eliminar')) {
      e.target.closest('tr').remove();
      actualizarSubtotales();
    }
  });

  btnComprar.addEventListener('click', () => {
    if (cartItems.querySelectorAll('tr').length === 0) {
      alert('El carrito está vacío.');
      return;
    }
    alert('Compra realizada con éxito 🎉');
    while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
    }
    actualizarSubtotales();
  });

  actualizarSubtotales();
});
