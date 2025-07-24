
let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

let total = precioUnitario * cantidad;

// Aplicamos el descuento según la cantidad
if (cantidad < 10) {
  precioFinal = total; // sin descuento
} else if (cantidad >= 10 && cantidad < 50) {
  precioFinal = total * 0.9; // 10% de descuento
} else {
  precioFinal = total * 0.8; // 20% de descuento
}

// Mostramos el precio final con 2 decimales
console.log(precioFinal.toFixed(2));
