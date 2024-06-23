import { ValidacionClave } from "./modelo";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    if (clave.toUpperCase() === clave || clave.toLowerCase() === clave) {
        return {
            esValida: false,
            error: "La clave debe contener minúsculas y mayúsculas"
        }
    } else {
        return {
            esValida: true
        }
    }
}

export const tieneNumeros = (clave: string): ValidacionClave => {
    let arrayDeClave: string[] = [];

    for (let i = 0; i <= clave.length; i++) {
        arrayDeClave.push(clave[i])
    }

    const hayAlMenosUnNumero: boolean = arrayDeClave.some((letra: string) =>
        !isNaN(parseInt(letra))
    )

    return hayAlMenosUnNumero === true ? { esValida: true }
        : {
            esValida: false,
            error: "La clave debe contener al menos un número"
        };
}

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    return clave.length >= 8 ? { esValida: true }
        : { esValida: false, error: "La clave debe contener al menos 8 caracteres" }
};

export const tieneNombreUsuario = (
    nombreUsuario: string,
    clave: string,
): ValidacionClave => {

    const claveToLowerCase = clave.toLowerCase();
    const nombreToLoweCase = nombreUsuario.toLowerCase();

    return claveToLowerCase.includes(nombreToLoweCase)
        ? { esValida: false, error: "La clave no debe contener el nombre de usuario" }
        : { esValida: true }

}

export const tienePalabrasComunes = (
    clave: string,
    commonPasswords: string[]
): ValidacionClave => {
    const claveToLowerCase = clave.toLowerCase();

    const comprobarClave: boolean = commonPasswords.some(clave => clave.toLocaleLowerCase() === claveToLowerCase);

    return comprobarClave
        ? {
            esValida: false,
            error: "La clave es muy común"
        }
        : {
            esValida: true
        }
}