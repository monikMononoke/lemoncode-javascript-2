export interface Carta {
    idFoto: number; //del 1 al 6 dos veces
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
}

export interface InfoCarta {
    idFoto: number;
    imagen: string;
}

export const infoCartas: InfoCarta[] = [
    { idFoto: 1, imagen: "./imagenes/1.png" },
    { idFoto: 2, imagen: "./imagenes/2.png" },
    { idFoto: 3, imagen: "./imagenes/3.png" },
    { idFoto: 4, imagen: "./imagenes/4.png" },
    { idFoto: 5, imagen: "./imagenes/5.png" },
    { idFoto: 6, imagen: "./imagenes/6.png" },
]

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    const nuevoArray = infoCartas.map((carta: InfoCarta): Carta => {
        return {
            ...crearCartaInicial(carta.idFoto, carta.imagen)
        };
    });
    return [...nuevoArray, ...nuevoArray];
}


export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);


export type EstadoPartida =
    | "PartidaNoIniciada"
    | "CeroCartasLevantadas"
    | "UnaCartaLevantada"
    | "DosCartasLevantadas"
    | "PartidaCompletada"
    ;

export interface Tablero {
    cartas: Carta[];
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
})

export let tablero: Tablero = crearTableroInicial();

