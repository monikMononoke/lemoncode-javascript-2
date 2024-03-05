import {dameCarta, mePlanto, nuevaPartida} from "./ui";

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