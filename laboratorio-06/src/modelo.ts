interface Puntos {
    puntosTotales : number
}

export const puntos : Puntos = {
    puntosTotales : 0
}

export const generarNumeroCarta = (numeroAleatorio: number) => {
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
}
   

