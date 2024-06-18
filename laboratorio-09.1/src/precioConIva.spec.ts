import { Producto } from "./modelo";
import { calcularPrecioConIva } from "./precioConIva"

describe("calcularPrecioConIva", () => {
    it("debe devolver el precio del producto con iva", () => {
        const producto: Producto = {
            nombre: "pepino",
            precio: 2,
            tipoIva: "general"
        }

        const resultado = calcularPrecioConIva(producto);

        expect(resultado).toBe(2.42)
    })

    it("debe devolver el precio del producto con iva", () => {
        const producto: Producto = {
            nombre: "garbanzos",
            precio: 4,
            tipoIva: "reducido"
        }

        const resultado = calcularPrecioConIva(producto);

        expect(resultado).toBe(4.4)
    })

    it("debe devolver el precio del producto con iva", () => {
        const producto: Producto = {
            nombre: "macarrones",
            precio: 4,
            tipoIva: "superreducidoA"
        }

        const resultado = calcularPrecioConIva(producto);

        expect(resultado).toBe(4.2)
    })

    it("debe devolver el precio del producto con iva", () => {
        const producto: Producto = {
            nombre: "compresas",
            precio: 5,
            tipoIva: "superreducidoB"
        }

        const resultado = calcularPrecioConIva(producto);

        expect(resultado).toBe(5.2)
    })

    it("debe devolver el precio del producto con iva", () => {
        const producto: Producto = {
            nombre: "compresas",
            precio: 5,
            tipoIva: "superreducidoC"
        }

        const resultado = calcularPrecioConIva(producto);

        expect(resultado).toBe(5)
    })

    it("debe devolver el precio del producto con iva", () => {
        const producto: Producto = {
            nombre: "bananas",
            precio: 4,
            tipoIva: "superreducidoC"
        }

        const resultado = calcularPrecioConIva(producto);

        expect(resultado).toBe(4)
    })
})