import { porcentajeIva, calcularPrecioConIva } from "./helpers";
import { Producto } from "./modelo";


describe("porcentajeIva", () => {
    it("Debe devolver un número que corresponde al tipo de IVA, en este caso 21", () => {
        //Act 
        let iva = "general";

        //Arrange 
        const resultado = porcentajeIva(iva);

        //Assert
        expect(resultado).toBe(21);
    });
    it("Debe devolver un número que corresponde al tipo de IVA, en este caso 10", () => {
        //Act 
        let iva = "reducido";

        //Arrange 
        const resultado = porcentajeIva(iva);

        //Assert
        expect(resultado).toBe(10);
    });

    it("Debe devolver un número que corresponde al tipo de IVA, en este caso 5", () => {
        //Act 
        let iva = "superreducidoA";

        //Arrange 
        const resultado = porcentajeIva(iva);

        //Assert
        expect(resultado).toBe(5);
    });

    it("Debe devolver un número que corresponde al tipo de IVA, en este caso 4", () => {
        //Act 
        let iva = "superreducidoB";

        //Arrange 
        const resultado = porcentajeIva(iva);

        //Assert
        expect(resultado).toBe(4);
    });

    it("Debe devolver un número que corresponde al tipo de IVA, en este caso 0", () => {
        //Act 
        let iva = "superreducidoC";

        //Arrange 
        const resultado = porcentajeIva(iva);

        //Assert
        expect(resultado).toBe(0);
    });

    it("Debe devolver un número que corresponde al tipo de IVA, en este caso 0", () => {
        //Act 
        let iva = "sinIva";

        //Arrange 
        const resultado = porcentajeIva(iva);

        //Assert
        expect(resultado).toBe(0);
    });
})


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