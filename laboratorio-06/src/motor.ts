import { puntos } from "./modelo";

export const generarNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
};

export const obtenerPuntoCarta = (carta: number) => {
    return carta > 7 ? 0.5 : carta;
}

export const sumarPunto = (carta : number) => {
    const punto = obtenerPuntoCarta(carta);
    return puntos.puntosTotales + punto;
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
