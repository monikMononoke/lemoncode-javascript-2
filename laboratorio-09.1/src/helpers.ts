
import { Producto, listaTiposIva, TotalPorTipoIva, LineaTicket } from "./modelo";


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

    return listaTiposIva.map(tipoIva => {
        const tipoDeIvaProducto = lineasTicket.filter(lineaTicket => {
            lineaTicket.producto.tipoIva === tipoIva
        })

        return ({
            tipoIva: tipoIva,
            cuantia: cuantiaPorTipoDeIva(lineasTicket, tipoIva)
        })
    })


};


const cuantiaPorTipoDeIva = (lineasTicket: LineaTicket[], tipoIva: string): number => {

    const iva = porcentajeIva(tipoIva);

    return lineasTicket.reduce((cuantia: number, lineasTicket: LineaTicket) => {

        const ivaDelProducto = (lineasTicket.producto.precio * iva) / 100;

        cuantia += (ivaDelProducto * lineasTicket.cantidad);

        return cuantia;

    }, 0)
}
