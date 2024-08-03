import { codigosDeBanco, codigoSucursal } from "./verificaIBAN.model";


export const patronCompruebaIban = (value: string): boolean => {
    const patronIBAN = /^(?<codigoPais>ES)(?<digitosDeControl>\d{2})(\s|-|_)?(?<entidadBancaria>\d{4})(\s|-|_)?(?<oficina>(\d{4})(\s|-|_)?)(?<control>\d{2})(\s|-|_)?(?<numeroDeCuenta>\d{10})$/;
    return patronIBAN.test(value);
}

export const verificaSiIBANEsValido = (): void => {
    const estaBienFormado = patronCompruebaIban(recogerIBAN());
    if (estaBienFormado) {
        createParagraph("El IBAN introducido esta bien formado");
    } else {
        createParagraph("El IBAN introducido no esta bien formado");
    }
}

export const recogerIBAN = () => {
    const input = document.querySelector("input");
    return (input && input instanceof HTMLInputElement) ? input.value : "";
}

export const createParagraph = (text: string) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    const div = document.querySelector("#resultado");
    div?.appendChild(paragraph);
}

const obtenerNombreBanco = (codigoEntidad: string): string => {
    return codigosDeBanco.find(banco => banco.entidad === codigoEntidad)?.nombre || "No se ha encontrado el banco";
}

export const desglosarIBAN = (iban: string): codigoSucursal => {
    const patronIBAN = /^(?<codigoPais>ES)(?<digitosDeControl>\d{2})(\s|-|_)?(?<entidadBancaria>\d{4})(\s|-|_)?(?<oficina>\d{4})(\s|-|_)?(?<control>\d{2})(\s|-|_)?(?<numeroDeCuenta>\d{10})$/;
    const desglose = iban.match(patronIBAN);
    if (desglose) {
        const resultado = desglose.groups as any;
        const informacionObtenida = {
            banco: {
                entidad: resultado.entidadBancaria,
                nombre: obtenerNombreBanco(resultado.entidadBancaria)
            },
            sucursal: resultado.oficina,
            digitoControl: resultado.control,
            cuenta: resultado.numeroDeCuenta
        }
        return informacionObtenida;
    } else {
        throw new Error("El IBAN no tiene el formato correcto");
    }
}

export const mostrarInformacion = (iban: string) => {
    const informacion = desglosarIBAN(iban);
    createParagraph(`Entidad: ${informacion.banco.nombre}`);
    createParagraph(`Sucursal: ${informacion.sucursal}`);
    createParagraph(`Digito de control: ${informacion.digitoControl}`);
    createParagraph(`Cuenta: ${informacion.cuenta}`);
}