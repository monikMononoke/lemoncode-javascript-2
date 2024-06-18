import { porcentajeIva } from "./porcentajeIva";

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