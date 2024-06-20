import { LineaTicket, ResultadoLineaTicket, TicketFinal } from "./modelo";
import { calcularPrecioConIva, calculoTotalPorTipoDeIva, ivaDelProducto } from "./helpers";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const subTotal = calcularSubtotalProductos(lineasTicket);
  const totalIva = calcularIva(lineasTicket);

  return {
    total: {
      totalSinIva: subTotal,
      totalIva: totalIva,
      totalConIva: subTotal + totalIva,
    },
    lineas: crearListadoResultadoLineasTicket(lineasTicket),
    desgloseIva: calculoTotalPorTipoDeIva(lineasTicket),
  };
};

const crearListadoResultadoLineasTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  let resultadoLineas: ResultadoLineaTicket[] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    resultadoLineas = añadirProductoAResultadoLineas(lineasTicket[i]);
  }
  return resultadoLineas;
};


const calcularSubtotalProductos = (lineasTicket: LineaTicket[]): number => lineasTicket.reduce((acc: number, lineaTicket: LineaTicket) => {
  return acc += lineaTicket.producto.precio * lineaTicket.cantidad
}, 0)

const calcularIva = (lineasTicket: LineaTicket[]): number => lineasTicket.reduce((totalIva: number, lineaTicket: LineaTicket) => {
  return totalIva += (lineaTicket.cantidad * ivaDelProducto(lineaTicket.producto));
}, 0)


const añadirProductoAResultadoLineas = (lineaTicket: LineaTicket) => {
  let resultadoLineas: ResultadoLineaTicket[] = [];
  resultadoLineas.push({
    nombre: lineaTicket.producto.nombre,
    cantidad: lineaTicket.cantidad,
    precioSinIva: lineaTicket.producto.precio,
    tipoIva: lineaTicket.producto.tipoIva,
    precioConIva: calcularPrecioConIva(lineaTicket.producto),
  });

  return resultadoLineas;
};
