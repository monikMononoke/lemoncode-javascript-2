import { Tablero, tablero, Carta } from "./modelo";
import {
    iniciarPartida, sePuedeVoltearLaCarta,
    voltearLaCarta, sonPareja, parejaEncontrada,
    parejaNoEncontrada,
    esPartidaCompleta
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
    elementoImg.style.backfaceVisibility = "visible";
}

const mirarSiEsLaSegundaCarta = (tablero: Tablero) => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if (indiceA !== undefined && indiceB !== undefined && tablero.estadoPartida === "DosCartasLevantadas") {
        if (sonPareja(indiceA, indiceB, tablero)) {
            parejaEncontrada(tablero, indiceA, indiceB);
            if (esPartidaCompleta(tablero)) {
                mostrarQueLaPartidaHaTerminado();
                voltearTodasLasCartas(tablero.cartas);
            }
        } else {
            parejaNoEncontrada(tablero, indiceA, indiceB);
            volterLasCartasQueNoSonPareja(tablero.cartas)
        }
    }
}

const darleLaVueltaALaCarta = (indice: number) => {
    const imagenIndiceId = `[data-index-img='${indice}']`;
    const elementoImagen = document.querySelector(`img${imagenIndiceId}`);
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.style.transform = "";
        elementoImagen.style.transition = "";
        elementoImagen.style.backgroundColor = "#77b9f7";
        elementoImagen.style.backfaceVisibility = "hidden";
    }
}

const ponerImagenBocaAbajo = (cartas: Carta[]) => {
    for (let i = 0; i < cartas.length; i++) {
        if (!cartas[i].encontrada && !cartas[i].estaVuelta) {
            darleLaVueltaALaCarta(i);
        }
    }
}

const volterLasCartasQueNoSonPareja = (cartas: Carta[]) => {
    setTimeout(() => {
        ponerImagenBocaAbajo(cartas);
    }, 1000);
}

const mostrarQueLaPartidaHaTerminado = () => {
    const h3 = document.querySelector('.h2');
    if (h3 && h3 instanceof HTMLDivElement) {
        h3.style.opacity = "1";
    }
}

const ponerLasCartasBocaAbajo = (cartas: Carta[]) => {
    for (let i = 0; i < cartas.length; i++) {
        darleLaVueltaALaCarta(i);
    }

}

const voltearTodasLasCartas = (cartas: Carta[]) => {
    setTimeout(() => {
        ponerLasCartasBocaAbajo(cartas);
    }, 1000)
}

//botón iniciar partida
const botonEmpezarPartida = document.getElementById("boton-empezar");
if (botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement) {
    botonEmpezarPartida.addEventListener("click", () => {
        iniciarPartida(tablero);
        console.log(tablero.cartas);
    });
}
