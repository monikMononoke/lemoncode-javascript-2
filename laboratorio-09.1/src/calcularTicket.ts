import { LineaTicket, ResultadoLineaTicket, TicketFinal } from "./modelo";
import { calcularPrecioConIva, calculoTotalPorTipoDeIva } from "./helpers";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const subTotal = calcularSubtotalProductos(lineasTicket);
  const totalIva = calcularIva(lineasTicket);

  return {
    lineas: crearListadoResultadoLineasTicket(lineasTicket),
    total: {
      totalSinIva: subTotal,
      totalIva: totalIva,
      totalConIva: subTotal + totalIva,
    },
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

const calcularSubtotalProductos = (lineasTicket: LineaTicket[]): number => {
  let subtotal: number = 0;
  for (let i = 0; i < lineasTicket.length; i++) {
    subtotal += lineasTicket[i].producto.precio * lineasTicket[i].cantidad;
  }
  return subtotal;
};

const calcularIva = (lineasTicket: LineaTicket[]): number => {
  let totalIva: number = 0;
  for (let i = 0; i < lineasTicket.length; i++) {
    totalIva +=
      calcularPrecioConIva(lineasTicket[i].producto);
  }
  return totalIva;
};

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
