
import { Producto } from "./modelo";
import { LineaTicket, TotalPorTipoIva, listaTiposIva } from "./modelo"


export const porcentajeIva = (stringIva: string
): number => {
    switch (stringIva) {
        case "general":
            stringIva = "21";
            break;
        case "reducido":
            stringIva = "10";
            break;
        case "superreducidoA":
            stringIva = "5";
            break;
        case "superreducidoB":
            stringIva = "4";
            break;
        case "superreducidoC":
            stringIva = "0";
            break;
        case "sinIva":
            stringIva = "0";
            break;
    }

    const iva: number = parseInt(stringIva);

    return iva;
}



export const ivaDelProducto = (producto: Producto): number => {
    const iva = porcentajeIva(producto.tipoIva);

    const ivaDelProducto = (producto.precio * iva) / 100;

    return ivaDelProducto;
}


export const calcularPrecioConIva = (producto: Producto): number => {
    const precio = producto.precio;
    const iva = ivaDelProducto(producto);

    const precioConIva = precio + iva;

    return precioConIva;
}


export const calculoTotalPorTipoDeIva = (
    lineasTicket: LineaTicket[]
): TotalPorTipoIva[] => {
    return listaTiposIva.map((tipoIva) => {
        // listaTiposIva => "general, superReducidoA..."
        const listaProductosPorTipoIva = lineasTicket.filter(
            (lineaTicket) => lineaTicket.producto.tipoIva === tipoIva
        );

        const totalDeIvaPorProductos = parseFloat(calculoDeTotalIva(listaProductosPorTipoIva, tipoIva).toFixed(2));

        // calcular
        return {
            tipoIva: tipoIva,
            cuantia: totalDeIvaPorProductos,
        };
    });

};


const calculoDeTotalIva = (lineasTicket: LineaTicket[], tipoIva: string): number => {

    return lineasTicket.reduce((cuantia: number, lineasTicket: LineaTicket) => {

        const iva = porcentajeIva(tipoIva);

        const ivaDelProducto = (lineasTicket.producto.precio * iva) / 100;

        return cuantia += (ivaDelProducto * lineasTicket.cantidad);

    }, 0)
}