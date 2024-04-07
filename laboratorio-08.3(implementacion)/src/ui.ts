import { Tablero, tablero } from "./modelo";
import {
    iniciarPartida, sePuedeVoltearLaCarta,
    voltearLaCarta, sonPareja, parejaEncontrada
} from "./motor";

export const mapearDivs = (tablero: Tablero, indice: number) => {
    const imagenIndiceId = `[data-index-img='${indice}']`;
    const cartaIndiceId = `[data-index-id='${indice}']`;
    const elementoDiv = document.querySelector(`div${cartaIndiceId}`);
    const elementoImg = document.querySelector(`img${imagenIndiceId}`);
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
    // console.log(elementoImg);
    if (sePuedeVoltearLaCarta(tablero, indice)) {
        voltearLaCarta(tablero, indice);
        volteaCarta(tablero, indice, elementoImg);
        mirarSiEsLaSegundaCarta(tablero);
        divCartas(tablero, indice, elementoImg);
    }
}

const volteaCarta = (tablero: Tablero, indice: number, elementoImg: HTMLImageElement) => {
    let urlImagen = tablero.cartas[indice].imagen;
    mostrarImagenAnimal(urlImagen, elementoImg);
}

const mostrarImagenAnimal = (imgUrl: string, elementoImg: HTMLImageElement) => {
    elementoImg.src = imgUrl;
    elementoImg.style.display = "block";
    elementoImg.style.transform = "rotateY(180deg)";
    elementoImg.style.transformStyle = "preserve-3d";
    elementoImg.style.backgroundColor = "#B799FF";
}

const mirarSiEsLaSegundaCarta = (tablero: Tablero) => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if (indiceA !== undefined && indiceB !== undefined && tablero.estadoPartida === "DosCartasLevantadas") {
        if (!sonPareja(indiceA, indiceB, tablero)) {

        } else {
            parejaEncontrada(tablero, indiceA, indiceB);
            console.log("SI");
        }
    }
}

const divCartas = (tablero: Tablero, indice: number, elementoImg: HTMLImageElement) => {
    setTimeout(() => {
        if (!tablero.cartas[indice].encontrada &&
            tablero.indiceCartaVolteadaA !== tablero.indiceCartaVolteadaB) {
            volverCartas(tablero, indice, elementoImg);
        }
    }, 1200);

}

const volverCartas = (tablero: Tablero, indice: number, elementoImg: HTMLImageElement) => {
    let urlImagen = tablero.cartas[indice].imagen;
    esconderImagenAnimal(urlImagen, elementoImg);
}


const esconderImagenAnimal = (urlImagen: string, elementoImg: HTMLImageElement) => {
    elementoImg.src = urlImagen;
    const divCarta = elementoImg.parentElement;
    if (divCarta && divCarta instanceof HTMLDivElement) {
        elementoImg.style.display = "none";
        divCarta.style.display = "block";
        divCarta.style.transform = "rotateY(-180deg)";
        divCarta.style.transformStyle = "preserve-3d";
    }
}

//botón iniciar partida
const botonEmpezarPartida = document.getElementById("boton-empezar");
if (botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement) {
    botonEmpezarPartida.addEventListener("click", () => {
        iniciarPartida(tablero);
        console.log(tablero.cartas);
    });
}
