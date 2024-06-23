import { ValidacionClave } from "./modelo";
import { tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validaClave.helpers";



export const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
): ValidacionClave => {

    let errores = ['mayusculasMinusculas', 'numeros', 'longitud', 'nombre', 'palabras'];

    for (const error of errores) {
        let resultado: ValidacionClave;
        switch (error) {
            case 'palabras':
                resultado = tienePalabrasComunes(clave, commonPasswords);
                break;
            case 'longitud':
                resultado = tieneLongitudMinima(clave);
                break;
            case 'numeros':
                resultado = tieneNumeros(clave);
                break;
            case 'nombre':
                resultado = tieneNombreUsuario(nombreUsuario, clave);
                break;
            case 'mayusculasMinusculas':
                resultado = tieneMayusculasYMinusculas(clave);
                break;
            default:
                resultado = { esValida: true };
                break;
        }
        if (!resultado.esValida) {
            return resultado;
        }
    }

    return { esValida: true }

};

