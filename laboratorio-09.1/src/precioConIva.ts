import { ivaDelProducto } from "./calculaIva";
import { Producto } from "./modelo";

export const calcularPrecioConIva = (producto: Producto): number => {
    const precio = producto.precio;
    const iva = ivaDelProducto(producto);

    const precioConIva = precio + iva;

    return precioConIva;
}