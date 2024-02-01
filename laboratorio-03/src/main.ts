import "./style.css";
/*
The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
*/
interface Grupos {
    nombre: string,
    año: number,
    activo: boolean,
    estilo: string,
}

const grupo1 : Grupos = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    estilo: "Pop Rock 🎵",
}

const grupo2 : Grupos = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    estilo: "Rock 🎸",
}

const grupo3 : Grupos = {
    nombre: "AC/DC",
    año: 1973,
    activo: true,
    estilo: "Hard Rock 🤘",
}

const grupo4 : Grupos = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    estilo: "Clásica 🎼",
}

const grupo5 : Grupos = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    estilo: "Rock 🎸",
}

console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);
