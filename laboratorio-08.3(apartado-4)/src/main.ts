import { animales } from "./datos";
import { barajarAnimales } from "./motor";
import { pintarJuego } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    console.log(barajarAnimales(animales));
    console.log(barajarAnimales(animales));
})

document.addEventListener("DOMContentLoaded", pintarJuego);