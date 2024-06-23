import { ValidacionClave, commonPasswords } from "./modelo";
import { validarClave } from "./validaClave";


describe("validarClave", () => {
    it("debe devolver un booleano. En caso de error también devuelve un string", () => {
        const nombreDeUsuario: string = "Monika";
        const clave: string = "h5b1MAc4";
        const arrayCommonPass: string[] = commonPasswords;

        const validacion = validarClave(nombreDeUsuario, clave, arrayCommonPass);

        const resultado: ValidacionClave = { esValida: true };


        expect(validacion).toStrictEqual(resultado);
    });
})

