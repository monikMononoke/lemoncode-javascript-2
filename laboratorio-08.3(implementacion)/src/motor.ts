import { Carta, Tablero } from "./modelo";

const generarNumeroAleatorio = (indiceDelArray: number) =>
    Math.floor(Math.random() * (indiceDelArray + 1));

const barajarCartas = (cartas: Carta[]): Carta[] => {
    const copiaCartas = [...cartas];
    for (let indice = copiaCartas.length - 1; indice > 0; indice--) {
        let indiceAleatorio = generarNumeroAleatorio(indice);
        [{ ...copiaCartas[indice] }, { ...copiaCartas[indiceAleatorio] }] = [
            copiaCartas[indiceAleatorio],
            copiaCartas[indice],
        ];
    }
    return copiaCartas;
};

export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
    if (!tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta) {
        return true
    } else {
        return false
    }
}

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
    if (tablero.estadoPartida === "CeroCartasLevantadas") {
        darLaVueltaALaPrimeraCarta(tablero, indice);
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
        darLaVueltaALaSegundaCarta(tablero, indice);
    }
    tablero.cartas[indice].estaVuelta = true;
}

const darLaVueltaALaPrimeraCarta = (tablero: Tablero, indice: number) => {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
}

const darLaVueltaALaSegundaCarta = (tablero: Tablero, indice: number) => {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
}

export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
        parejaEncontrada(tablero, indiceA, indiceB);
        return true
    } else {
        parejaNoEncontrada(tablero, indiceA, indiceB);
        return false
    }
}

export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    tablero.cartas[indiceA].estaVuelta = true;
    tablero.cartas[indiceB].estaVuelta = true;
    tablero.estadoPartida = "CeroCartasLevantadas";
}

export const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
    // setTimeout(() => {
    tablero.cartas[indiceA].encontrada = false;
    tablero.cartas[indiceB].encontrada = false;
    tablero.estadoPartida = "CeroCartasLevantadas";
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;

    // }, 2000)
}

export const esPartidaCompleta = (tablero: Tablero): boolean => tablero.cartas.every(
    (carta) => carta.encontrada);

export const iniciarPartida = (tablero: Tablero): void => {
    tablero.estadoPartida = "CeroCartasLevantadas";
    const cartasBarajadas = barajarCartas(tablero.cartas);
    tablero.cartas = [...cartasBarajadas];
}


