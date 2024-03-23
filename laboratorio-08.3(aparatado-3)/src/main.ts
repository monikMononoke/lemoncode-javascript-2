import { barajarArrayAnimales } from "./motor";
import { animales } from "./datos";
import { pintarAnimal } from "./ui"

document.addEventListener("DOMContentLoaded", () => {
    console.log(barajarArrayAnimales(animales));
    pintarAnimal()
})

