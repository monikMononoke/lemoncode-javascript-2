let puntosTotales = 0;

const generarNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
};

const generarNumeroCarta = (numeroAleatorio: number) => {
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};
   
const dameUrlCarta = (carta : number) => {
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

const pintarCarta = (urlCarta : string ) => {
    const elementoImagen = document.getElementById('imagen');

    if(elementoImagen && elementoImagen instanceof HTMLImageElement){
        elementoImagen.src = urlCarta;
    }
};

const obtenerPuntoCarta = (carta: number) => {
    return carta > 7 ? 0.5 : carta;
}
   
const sumarPunto = (carta : number) => {
    const punto = obtenerPuntoCarta(carta);
    return puntosTotales + punto;
}

const setPuntosTotales = (sumarPunto : number) =>  {
    puntosTotales = sumarPunto;
}

const evaluarResultado = () => {
    if(puntosTotales > 6 && puntosTotales < 8) {
        return `Has ganado!!!`;
    } else {
        return `Uyyyy! Por poco!`;
    }
}

const devolverResultado = () => {
    const resultado = document.getElementById("resultado");
    if(resultado && resultado instanceof HTMLDivElement) {
        resultado.innerHTML = evaluarResultado();
    }
}

const terminarJuego = () => {
    let evaluacionPuntos = puntosTotales;
    if(evaluacionPuntos > 7.5) {
        deshabilitarBotonDameCarta();
        return `Te has pasado! Tienes ${puntosTotales} puntos!`;
    } else {
        return `Puntos: ${puntosTotales.toString()} `;
    }
}

const mostrarPuntos = (finJuego : string) => {
    const puntos = document.getElementById("puntuacion");
    if(puntos && puntos instanceof HTMLDivElement) {
        puntos.innerHTML = finJuego;
    }
} 

const deshabilitarBotonDameCarta = () => {
    const botonDeshabilitado = document.getElementById("dame-carta");
    if(botonDeshabilitado && botonDeshabilitado instanceof HTMLButtonElement) {
        botonDeshabilitado.disabled = true;
    }  
}

const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio);
    const urlCarta = dameUrlCarta(carta);
    pintarCarta(urlCarta);
    const puntosSumados = sumarPunto(carta);
    setPuntosTotales(puntosSumados);
    evaluarResultado();
    const finJuego = terminarJuego();
    mostrarPuntos(finJuego);
};

const mePlanto = ()  => {
    deshabilitarBotonDameCarta();
    devolverResultado();
}

const botonDameCarta = document.getElementById("dame-carta");
if(botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement){
    botonDameCarta.addEventListener("click", dameCarta);
}

const botonMePlanto = document.getElementById("me-planto");
if(botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", mePlanto);
}