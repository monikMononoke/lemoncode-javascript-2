import { Carta, EstadoPartida, Tablero } from "./modelo";

export const barajarCartas = (cartas: Carta[]): Carta[] => {

    for (var i = cartas.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    return cartas;
}

export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
    if (!tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta) {
        // voltearLaCarta(tablero, indice);
        return true
    } else {
        return false
    }
}

const voltearLaCarta = (tablero: Tablero, indice: number): void => {
    tablero.cartas[indice].estaVuelta = true;
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

const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
}

const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceA].encontrada = false;

    tablero.cartas[indiceB].estaVuelta = false;
    tablero.cartas[indiceB].encontrada = false;
}

export const esPartidaCompleta = (tablero: Tablero): boolean => tablero.cartas.every(
    (carta) => carta.encontrada);

export const iniciarPartida = (tablero: Tablero): void => {
    tablero.estadoPartida = "CeroCartasLevantadas";
    const cartasBarajadas = barajarCartas(tablero.cartas);
    tablero.cartas = [...cartasBarajadas];
}

export const estadoPartida = (tablero: Tablero, estado: EstadoPartida) => {
    tablero.estadoPartida = estado;
}

