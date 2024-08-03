import { buscaEnlaces } from "./buscarEnlaces";
import "./style.css";

const formulario = document.getElementById('formulario') as HTMLFormElement;
if (formulario) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        extraerEnlaces();
    })
}

const createParagraph = (text: string, parent: HTMLDivElement): void => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    parent.appendChild(paragraph);
}

const extraerEnlaces = () => {
    const texto = document.querySelector('#texto');
    const resultado = document.getElementById('resultado') as HTMLDivElement;

    if (texto && texto instanceof HTMLTextAreaElement) {
        const enlaces = texto.value;
        const enlacesExtraidos = buscaEnlaces(enlaces);
        enlacesExtraidos.forEach((enlace) => createParagraph(enlace, resultado));
    } else {
        createParagraph('No se ha encontrado el campo de texto', resultado);
    }
};