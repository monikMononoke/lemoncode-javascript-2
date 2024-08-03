import "./style.css";
import { isValidBBAN } from "ibantools";
import { createParagraph, recogerIBAN, patronCompruebaIban, verificaSiIBANEsValido, mostrarInformacion } from "./verificarIBAN";


const formulario = document.querySelector("form");
if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const iban = recogerIBAN();

        if (iban && iban !== null) {
            console.log("IBAN: ", iban);
            patronCompruebaIban(recogerIBAN());
            verificaSiIBANEsValido();
            const esValido = isValidBBAN(iban);
            createParagraph(`El IBAN introducido ${esValido ? "es" : "no es"} valido`);
            mostrarInformacion(iban);
        } else {
            alert("Introduce un IBAN");
        }
    });

    formulario.addEventListener("reset", () => {
        const div = document.querySelector("#resultado");
        if (div) {
            div.innerHTML = "";
        }
    });
}




