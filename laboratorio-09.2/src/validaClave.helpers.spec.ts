import { ValidacionClave, commonPasswords } from "./modelo";
import { tieneMayusculasYMinusculas, tieneNumeros, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes } from "./validaClave.helpers";

describe("tieneMayusculasYMinusculas", () => {
    it("Debe devolver false si todas las letras son mayusculas o minúsculas", () => {
        const clave: string = "AAA";

        const resultado: ValidacionClave = tieneMayusculasYMinusculas(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La clave debe contener minúsculas y mayúsculas"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Debe devolver false si todas las letras son mayusculas o minúsculas", () => {
        const clave: string = "aaa";

        const resultado: ValidacionClave = tieneMayusculasYMinusculas(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La clave debe contener minúsculas y mayúsculas"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Debe devolver false si todas las letras son mayusculas o minúsculas", () => {
        const clave: string = "AaA";

        const resultado = tieneMayusculasYMinusculas(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: true
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });
})


describe("tieneNumeros", () => {
    it("Devuelve true si la clave contiene al menos un caracter numérico", () => {
        const clave: string = "abc";

        const resultado = tieneNumeros(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La clave debe contener al menos un número"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Devuelve true si la clave contiene al menos un caracter numérico", () => {
        const clave: string = "";

        const resultado = tieneNumeros(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La clave debe contener al menos un número"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });


    it("Devuelve true si la clave contiene al menos un caracter numérico", () => {
        const clave: string = "abc1";

        const resultado = tieneNumeros(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: true
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

})


describe("tieneLongitudMinima", () => {
    it("Si la clave tiene al menos 8 caracteres devuelve true", () => {

        const clave: string = "aaa";

        const resultado = tieneLongitudMinima(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La clave debe contener al menos 8 caracteres"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Si la clave tiene al menos 8 caracteres devuelve true", () => {

        const clave: string = "";

        const resultado = tieneLongitudMinima(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: false,
            error: "La clave debe contener al menos 8 caracteres"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Si la clave tiene al menos 8 caracteres devuelve true", () => {

        const clave: string = "12345678";

        const resultado = tieneLongitudMinima(clave);

        const resultadoEsperado: ValidacionClave = {
            esValida: true
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });
})


describe("tieneNombreUsuario", () => {
    it("Devuelve false si la clave contiene el nombre de usuario", () => {

        const nombreUsuario: string = "Monika";

        const clave: string = "Monika123";

        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        const resultadoEsperado = {
            esValida: false,
            error: "La clave no debe contener el nombre de usuario"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Devuelve false si la clave contiene el nombre de usuario", () => {

        const nombreUsuario: string = "Monika";

        const clave: string = "monika123";

        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        const resultadoEsperado = {
            esValida: false,
            error: "La clave no debe contener el nombre de usuario"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Devuelve false si la clave contiene el nombre de usuario", () => {

        const nombreUsuario: string = "Monika";

        const clave: string = "Antonio";

        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        const resultadoEsperado = {
            esValida: true
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Devuelve false si la clave contiene el nombre de usuario", () => {

        const nombreUsuario: string = "Monika";

        const clave: string = "123akinoM";

        const resultado = tieneNombreUsuario(nombreUsuario, clave);

        const resultadoEsperado = {
            esValida: true
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });
})

describe("tienePalabrasComunes", () => {
    it("Devuelve true si la clave no se encuentra entre los elementos de un array con claves comúnes", () => {
        const clave = "password";

        const resultado = tienePalabrasComunes(clave, commonPasswords);

        const resultadoEsperado = {
            esValida: false,
            error: "La clave es muy común"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Devuelve true si la clave no se encuentra entre los elementos de un array con claves comúnes", () => {
        const clave = "football123";

        const resultado = tienePalabrasComunes(clave, commonPasswords);

        const resultadoEsperado = {
            esValida: false,
            error: "La clave es muy común"
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Devuelve true si la clave no se encuentra entre los elementos de un array con claves comúnes", () => {
        const clave = "unaClaveInventada";

        const resultado = tienePalabrasComunes(clave, commonPasswords);

        const resultadoEsperado = {
            esValida: true
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });

    it("Devuelve true si la clave no se encuentra entre los elementos de un array con claves comúnes", () => {
        const clave = "0a1b2c3d";

        const resultado = tienePalabrasComunes(clave, commonPasswords);

        const resultadoEsperado = {
            esValida: true
        }

        expect(resultado).toStrictEqual(resultadoEsperado)
    });
})