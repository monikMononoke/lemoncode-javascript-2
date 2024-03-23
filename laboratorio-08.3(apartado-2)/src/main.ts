import { animales } from "./datos";
import { barajarAnimales } from "./motor";
import { pintarAnimal } from "./ui"


document.addEventListener("DOMContentLoaded", () => {
    console.log(barajarAnimales(animales));
    console.log(barajarAnimales(animales));
    console.log(barajarAnimales(animales));
    console.log(barajarAnimales(animales));
    console.log(barajarAnimales(animales));
    console.log(barajarAnimales(animales));
})

document.addEventListener("DOMContentLoaded", pintarAnimal);