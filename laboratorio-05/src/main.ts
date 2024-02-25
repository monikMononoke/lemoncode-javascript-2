let puntosTotales = 0;

const generarNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
};

const generarNumeroCarta = (numeroAleatorio: number) => {
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};
   
const mostrarCarta = (carta : number) => {
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

const evaluarResultadoMePlanto = () => {
    if(puntosTotales <= 4) {
        return `Has sido muy conservador!`;
    } 
    if(puntosTotales == 5) {
        return `Te ha entrado el canguelo eh?`;
    } 
    if(puntosTotales == 6 || puntosTotales == 6.5 || puntosTotales == 7) {
        return `Casi casi...`;
    } 
    if(puntosTotales == 7.5) {
        return `! Lo has clavado! Enhorabuena!`;
    } 
    return puntosTotales.toString();
}

const devolverResultadoMePlanto = (evaluacion : string) => {
    const resultado = document.getElementById("resultado");
    if(resultado && resultado instanceof HTMLDivElement) {
        resultado.innerHTML = evaluacion;
    }
}

const gestionarPartida = () :string => {
    let mensaje = '';

    if(puntosTotales === 7.5) {
        mensaje = `Lo has clavado!!! Tienes ${puntosTotales}! Has ganado la partida!`;
        deshabilitarBotonDameCarta();
        deshabilitarBotonMePlanto();
    } else if(puntosTotales > 7.5){
        mensaje =  `Te has pasado! Tienes ${puntosTotales} puntos!`
        deshabilitarBotonDameCarta();
        deshabilitarBotonMePlanto();
    } else {
        mensaje = puntosTotales.toString();
    }
    return mensaje;
}

const mostrarPuntos = (mensaje : string)  => {
    const puntos = document.getElementById("puntuacion");
    if(puntos && puntos instanceof HTMLDivElement) {
        puntos.innerHTML = mensaje;
    }
} 

const deshabilitarBotonDameCarta = ()  => {
    const botonDameCartaDeshabilitado = document.getElementById("dame-carta");
    if(botonDameCartaDeshabilitado && botonDameCartaDeshabilitado instanceof HTMLButtonElement) {
        botonDameCartaDeshabilitado.disabled = true;
    }  
}

const deshabilitarBotonMePlanto = () => {
    const botonMePlantoDeshabilitado = document.getElementById("me-planto");
    if(botonMePlantoDeshabilitado && botonMePlantoDeshabilitado instanceof HTMLButtonElement) {
        botonMePlantoDeshabilitado.disabled = true;
    }
}

const habilitarDameCarta = () => {
    const habilitarDameCarta = document.getElementById("dame-carta");
    if(habilitarDameCarta && habilitarDameCarta instanceof HTMLButtonElement) {
        habilitarDameCarta.disabled = false;
    }
}

const habilitarMePlanto = () => {
    const habilitarMePlanto = document.getElementById("me-planto");
    if(habilitarMePlanto && habilitarMePlanto instanceof HTMLButtonElement) {
        habilitarMePlanto.disabled = false;
    }
}

const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio);
    const urlCarta = mostrarCarta(carta);
    pintarCarta(urlCarta);
    const puntosSumados = sumarPunto(carta);
    setPuntosTotales(puntosSumados);
    const mensaje = gestionarPartida();
    mostrarPuntos(mensaje);
};

const mePlanto = ()  => {
    const evaluacion = evaluarResultadoMePlanto()
    devolverResultadoMePlanto(evaluacion);
    deshabilitarBotonDameCarta();
}

const nuevaPartida = () => {
    habilitarDameCarta();
    habilitarMePlanto();
    puntosTotales = 0;
    setPuntosTotales(puntosTotales);
    const puntosNuevos = puntosTotales.toString();
    mostrarPuntos(puntosNuevos);
    devolverResultadoMePlanto('');
}

const botonDameCarta = document.getElementById("dame-carta");
if(botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement){
    botonDameCarta.addEventListener("click", dameCarta);
}

const botonMePlanto = document.getElementById("me-planto");
if(botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", mePlanto);
}

const botonNuevaPartida = document.getElementById("nueva-partida");
if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.addEventListener("click", nuevaPartida);
}