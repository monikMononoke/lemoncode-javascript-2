import { puntos } from "./modelo";


//type estadoPartida es un tipo creado para las pruebas unitarias
export type estadoPartida = 
    'Te has pasado'
    | 'Lo has clavado'
    | 'Puedes hacerlo mejor'
;


//gestionarPartidaFalse -> funcion creada para las pruebas unitarias
export const gestionarPartidaFalsa = (puntosPartida : number) : estadoPartida=> {
    if(puntosPartida == 7.5) {
        return 'Lo has clavado'
    } else if(puntosPartida > 7.5){
        return 'Te has pasado'
    } else {
        return 'Puedes hacerlo mejor';
    }
}

export const generarNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
};

export const obtenerPuntoCarta = (carta: number) => {
    return carta > 7 ? 0.5 : carta;
}

export const sumarPunto = (puntoDeLaCarta : number) => {
    return puntos.puntosTotales + puntoDeLaCarta;
}

export const setPuntosTotales = (sumarPunto : number) =>  {
    puntos.puntosTotales = sumarPunto;
}

export const evaluarResultadoMePlanto = () => {
    if(puntos.puntosTotales <= 4) {
        return `Has sido muy conservador!`;
    } 
    if(puntos.puntosTotales == 5) {
        return `Te ha entrado el canguelo eh?`;
    } 
    if(puntos.puntosTotales == 6 || puntos.puntosTotales == 6.5 || puntos.puntosTotales == 7) {
        return `Casi casi...`;
    } 
    if(puntos.puntosTotales == 7.5) {
        return `! Lo has clavado! Enhorabuena!`;
    } 
    return puntos.puntosTotales.toString();
}
