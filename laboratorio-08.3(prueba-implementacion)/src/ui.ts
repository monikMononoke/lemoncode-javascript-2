import { Tablero, tablero } from "./modelo";
import { iniciarPartida, sePuedeVoltearLaCarta } from "./motor";

export const mapearDivs = (tablero: Tablero, indice: number) => {
    const cartaIndiceId = `[data-index-id='${indice}']`;
    const elementoDiv = document.querySelector(`div${cartaIndiceId}`);
    const elementoImg = document.querySelector(`img${cartaIndiceId}`);
    if (elementoDiv && elementoDiv instanceof HTMLDivElement && elementoImg && elementoImg instanceof HTMLImageElement) {
        elementoDiv.addEventListener("click", () => {
            if (tablero.estadoPartida !== "PartidaNoIniciada") {
                handlerDivCarta(tablero, indice, elementoImg);
            }
        })
    }
}


export const crearTablero = () => {
    for (let i = 0; i < tablero.cartas.length; i++) {
        mapearDivs(tablero, i);
    }
}

const handlerDivCarta = (tablero: Tablero, indice: number, elementoImg: HTMLImageElement) => {
    console.log(elementoImg);
    if (sePuedeVoltearLaCarta(tablero, indice)) {
        elementoImg.src = tablero.cartas[indice].imagen;
        elementoImg.style.transform = "rotateY(180deg)";
        elementoImg.style.transition = "all 0.5s linear";
        elementoImg.style.backgroundColor = "#B799FF";
    }

}


//boton iniciar partida
const botonEmpezar = document.getElementById("boton-empezar");
if (botonEmpezar && botonEmpezar instanceof HTMLButtonElement) {
    botonEmpezar.addEventListener("click", () => {
        iniciarPartida(tablero);
        console.log('Monika');
    });
}
