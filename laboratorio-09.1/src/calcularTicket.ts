import { LineaTicket, ResultadoLineaTicket, TicketFinal } from "./modelo";
import { ivaDelProducto, calcularPrecioConIva, calculoTotalPorTipoDeIva } from "./calculaTicket.heper"

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineasDelTicket = crearLineasTicket(lineasTicket);
  const subtotal = calcularSubtotalProductos(lineasTicket);
  const totalIva = parseFloat(calcularTotalIvaProductos(lineasTicket).toFixed(2));

  return ({
    lineas: lineasDelTicket,
    total: {
      totalSinIva: subtotal,
      totalIva: totalIva,
      totalConIva: subtotal + totalIva
    },
    desgloseIva: calculoTotalPorTipoDeIva(lineasTicket)
  });
};


const calcularSubtotalProductos = (lineasTicket: LineaTicket[]): number => lineasTicket.reduce((acc: number, lineaTicket: LineaTicket) => {
  return acc += lineaTicket.producto.precio * lineaTicket.cantidad
}, 0)


const calcularTotalIvaProductos = (lineasTicket: LineaTicket[]): number => lineasTicket.reduce((totalIva: number, lineaTicket: LineaTicket) => {
  return totalIva += (lineaTicket.cantidad * ivaDelProducto(lineaTicket.producto));
}, 0)


const crearLineasTicket = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
  return lineasTicket.map(lineas => {
    return {
      nombre: lineas.producto.nombre,
      cantidad: lineas.cantidad,
      precioSinIva: lineas.producto.precio,
      tipoIva: lineas.producto.tipoIva,
      precioConIva: calcularPrecioConIva(lineas.producto)
    }
  })
}