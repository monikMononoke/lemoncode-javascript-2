import {puntos, generarNumeroCarta} from "./modelo";

import {generarNumeroAleatorio, sumarPunto, setPuntosTotales, 
    evaluarResultadoMePlanto,
    obtenerPuntoCarta} from "./motor";

export const mostrarCarta = (carta : number) => {
    let urlCarta = "";
    switch (carta) {
        case 1:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
           break;
        case 2:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
           break;
        case 3:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
           break;
        case 4:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
           break;
        case 5:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
           break;
        case 6:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
           break;
        case 7:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
           break;
        case 10:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
           break;
        case 11:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
           break;
        case 12:
           urlCarta =  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
           break;
    }
    return urlCarta;
};

export const pintarCarta = (urlCarta : string ) => {
    const elementoImagen = document.getElementById('imagen');

    if(elementoImagen && elementoImagen instanceof HTMLImageElement){
        elementoImagen.src = urlCarta;
    }
};


export const mostrarPuntos = (mensaje : string)  => {
    const puntos = document.getElementById("puntuacion");
    if(puntos && puntos instanceof HTMLDivElement) {
        puntos.innerHTML = mensaje;
    }
} 

export const gestionarPartida = () :string => {
    let mensaje = '';

    if(puntos.puntosTotales === 7.5) {
        mensaje = `Lo has clavado!!! Tienes ${puntos.puntosTotales}! Has ganado la partida!`;
        deshabilitarBotonDameCarta();
        deshabilitarBotonMePlanto();
    } else if(puntos.puntosTotales> 7.5){
        mensaje =  `Te has pasado! Tienes ${puntos.puntosTotales} puntos!`
        deshabilitarBotonDameCarta();
        deshabilitarBotonMePlanto();
    } else {
        mensaje = puntos.puntosTotales.toString();
    }
    return mensaje;
}

export const devolverResultadoMePlanto = (evaluacion : string) => {
    const resultado = document.getElementById("resultado");
    if(resultado && resultado instanceof HTMLDivElement) {
        resultado.innerHTML = evaluacion;
    }
}

export const deshabilitarBotonDameCarta = ()  => {
    const botonDameCartaDeshabilitado = document.getElementById("dame-carta");
    if(botonDameCartaDeshabilitado && botonDameCartaDeshabilitado instanceof HTMLButtonElement) {
        botonDameCartaDeshabilitado.disabled = true;
    }  
}

export const deshabilitarBotonMePlanto = () => {
    const botonMePlantoDeshabilitado = document.getElementById("me-planto");
    if(botonMePlantoDeshabilitado && botonMePlantoDeshabilitado instanceof HTMLButtonElement) {
        botonMePlantoDeshabilitado.disabled = true;
    }
}

export const habilitarDameCarta = () => {
    const habilitarDameCarta = document.getElementById("dame-carta");
    if(habilitarDameCarta && habilitarDameCarta instanceof HTMLButtonElement) {
        habilitarDameCarta.disabled = false;
    }
}

export const habilitarMePlanto = () => {
    const habilitarMePlanto = document.getElementById("me-planto");
    if(habilitarMePlanto && habilitarMePlanto instanceof HTMLButtonElement) {
        habilitarMePlanto.disabled = false;
    }
}

export const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio);
    const urlCarta = mostrarCarta(carta);
    pintarCarta(urlCarta);
    const puntoDeLaCarta = obtenerPuntoCarta(carta);
    setPuntosTotales(puntoDeLaCarta);
    const mensaje = gestionarPartida();
    mostrarPuntos(mensaje);
};

export const mePlanto = ()  => {
    const evaluacion = evaluarResultadoMePlanto()
    devolverResultadoMePlanto(evaluacion);
    deshabilitarBotonDameCarta();
}

export const nuevaPartida = () => {
    habilitarDameCarta();
    habilitarMePlanto();
    puntos.puntosTotales = 0;
    setPuntosTotales(puntos.puntosTotales);
    const puntosNuevos = puntos.puntosTotales.toString();
    mostrarPuntos(puntosNuevos);
    devolverResultadoMePlanto('');
    pintarCarta('');
}