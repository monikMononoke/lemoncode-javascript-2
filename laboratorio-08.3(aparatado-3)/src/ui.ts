export const crearDiv = (className: string): HTMLDivElement => {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

export const pintarAnimal = () => {
    const divPrincipal = document.getElementById("contenedor-principal");

    if (divPrincipal && divPrincipal instanceof HTMLDivElement) {

        const contenedorCartas = crearDiv("contenedor-cartas");
        divPrincipal?.appendChild(contenedorCartas);

        for (let i = 0; i < 12; i++) {
            const div = crearDiv("carta-boca-abajo");
            contenedorCartas.appendChild(div);

        }
    }
}


