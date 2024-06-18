import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket } from "./modelo";
import { calcularPrecioConIva } from "./precioConIva";
import { ivaDelProducto } from "./calculaIva";

let resultadoLineas: ResultadoLineaTicket[] = [];

const resultadoTotales: ResultadoTotalTicket = {
  totalSinIva: 0,
  totalConIva: 0,
  totalIva: 0
}

export const calculaTicket = (lineasTicket: LineaTicket[]) => {
  for (let i = 0; i < lineasTicket.length; i++) {
    resultadoTotales.totalSinIva += (lineasTicket[i].producto.precio * lineasTicket[i].cantidad);
    resultadoTotales.totalConIva += (calcularPrecioConIva(lineasTicket[i].producto) * lineasTicket[i].cantidad);
    resultadoTotales.totalIva += ivaDelProducto(lineasTicket[i].producto);

    resultadoLineas.push({
      nombre: lineasTicket[i].producto.nombre,
      cantidad: lineasTicket[i].cantidad,
      precioSinIva: lineasTicket[i].producto.precio,
      tipoIva: lineasTicket[i].producto.tipoIva,
      precioConIva: calcularPrecioConIva(lineasTicket[i].producto)
    }
    )
  }

  return ({
    resultadoTotales,
    resultadoLineas
  });


};

