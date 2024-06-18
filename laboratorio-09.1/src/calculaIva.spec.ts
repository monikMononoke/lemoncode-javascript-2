import { ivaDelProducto } from "./calculaIva";
import { Producto } from "./modelo";

describe("ivaDelProducto", () => {
    it("Debe devolver el precio del producto con IVA", () => {

        const producto: Producto = {
            nombre: "pepino",
            precio: 5,
            tipoIva: "general"
        };

        const resultado = ivaDelProducto(producto);

        expect(resultado).toBe(1.05)
    });

    it("Debe devolver el precio del producto con IVA", () => {

        const producto: Producto = {
            nombre: "tomate",
            precio: 2,
            tipoIva: "reducido"
        };

        const resultado = ivaDelProducto(producto);

        expect(resultado).toBe(0.2)
    });

    it("Debe devolver el precio del producto con IVA", () => {

        const producto: Producto = {
            nombre: "lentejas",
            precio: 6,
            tipoIva: "superreducidoA"
        };

        const resultado = ivaDelProducto(producto);

        expect(resultado).toBe(0.3)
    });

    it("Debe devolver el precio del producto con IVA", () => {

        const producto: Producto = {
            nombre: "helado",
            precio: 4,
            tipoIva: "superreducidoB"
        };

        const resultado = ivaDelProducto(producto);

        expect(resultado).toBe(0.16)
    });

    it("Debe devolver el precio del producto con IVA", () => {

        const producto: Producto = {
            nombre: "helado",
            precio: 4,
            tipoIva: "superreducidoC"
        };

        const resultado = ivaDelProducto(producto);

        expect(resultado).toBe(0)
    });

})