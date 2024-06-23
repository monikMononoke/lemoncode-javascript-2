import { commonPasswords } from "./modelo";
import "./style.css";
import { validarClave } from "./validaClave";


console.log(validarClave("Monika", "123ClaVe", commonPasswords));
console.log(validarClave("Monika", "abcMonika123", commonPasswords));
console.log(validarClave("Monika", "abCDEefg", commonPasswords));
console.log(validarClave("Monika", "1234567890", commonPasswords));
console.log(validarClave("Monika", "12345", commonPasswords));
