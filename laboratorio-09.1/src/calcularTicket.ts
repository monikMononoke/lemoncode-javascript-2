import { LineaTicket, ResultadoLineaTicket, TicketFinal } from "./modelo";
import { ivaDelProducto, calcularPrecioConIva, calculoTotalPorTipoDeIva } from "./calculaTicket.heper"





export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineasDelTicket = crearLineasTicket(lineasTicket);
  const subtotal = calcularSubtotalProductos(lineasTicket);
  const totalIva = calcularTotalIvaProductos(lineasTicket);



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
  let resultadoLineas: ResultadoLineaTicket[] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    resultadoLineas.push({
      nombre: lineasTicket[i].producto.nombre,
      cantidad: lineasTicket[i].cantidad,
      precioSinIva: lineasTicket[i].producto.precio,
      tipoIva: lineasTicket[i].producto.tipoIva,
      precioConIva: calcularPrecioConIva(lineasTicket[i].producto)
    }
    )
  }

  return resultadoLineas;
}