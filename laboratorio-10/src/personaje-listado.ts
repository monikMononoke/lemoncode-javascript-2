import { Caracters } from "./personaje-listado.model";
import { obtenerListadoDePersonajes } from "./personaje-listado.api";

const crearElementoImagen = (
    img_personaje: string,
    nombre: string
): HTMLImageElement => {
    const imagen = document.createElement('img');
    imagen.src = img_personaje;
    imagen.alt = nombre;
    return imagen;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;
    return parrafo;
};

const crearContenedorPersonaje = (personaje: Caracters): HTMLDivElement => {
    const elementoPersonaje = document.createElement('div');
    elementoPersonaje.classList.add('personaje-contenedor');

    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('imagen-contenedor');
    elementoPersonaje.appendChild(contenedorImagen);

    const imagen = crearElementoImagen(`http://localhost:3000/${personaje.imagen}`, personaje.nombre);
    contenedorImagen.appendChild(imagen);

    const nombre = crearElementoParrafo(`Nombre: ${personaje.nombre}`);
    elementoPersonaje.appendChild(nombre);

    const especialidad = crearElementoParrafo(`Especialidad: ${personaje.especialidad}`);
    elementoPersonaje.appendChild(especialidad);

    const habilidades = crearElementoParrafo(`Habilidades: ${personaje.habilidades.join(', ')}`);
    elementoPersonaje.appendChild(habilidades);

    return elementoPersonaje;
}

const pintarPersonajes = async () => {
    const personajes = await obtenerListadoDePersonajes();
    const listado = document.querySelector('#lista-personajes');

    if (listado && listado instanceof HTMLDivElement) {
        personajes.forEach((personaje) => {
            const contenedorPersonaje = crearContenedorPersonaje(personaje);
            listado.appendChild(contenedorPersonaje);
        })
    } else {
        throw new Error('No se ha encontrado el listado de personajes');
    }
}


const buscarPersonaje = async () => {
    const input = document.querySelector('#nombre') as HTMLInputElement;
    const listado = document.querySelector('#lista-personajes');
    if (input && listado && listado instanceof HTMLDivElement) {
        const personajes = await obtenerListadoDePersonajes();
        const busqueda = input.value.toLowerCase();
        listado.innerHTML = '';
        personajes.forEach((personaje) => {
            if (personaje.nombre.toLowerCase().includes(busqueda)) {
                const contenedorPersonaje = crearContenedorPersonaje(personaje);
                listado.appendChild(contenedorPersonaje);
            }
        });
    } else {
        throw new Error('No se ha encontrado el listado de personajes');
    }
}

const econtrarPersonaje = () => {
    const formulario = document.querySelector('#formulario');
    if (formulario && formulario instanceof HTMLFormElement) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();
            buscarPersonaje();
        })
    };
}

document.addEventListener('DOMContentLoaded', () => {
    pintarPersonajes();
    econtrarPersonaje();
});