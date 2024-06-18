import { porcentajeIva } from "./porcentajeIva";
import { Producto } from "./modelo";

export const ivaDelProducto = (producto: Producto): number => {
    const iva = porcentajeIva(producto.tipoIva);

    const ivaDelProducto = (producto.precio * iva) / 100;

    return ivaDelProducto;
}