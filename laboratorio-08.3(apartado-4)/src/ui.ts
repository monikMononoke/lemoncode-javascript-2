const crearDiv = (nombreClase: string): HTMLDivElement => {
    const div = document.createElement('div');
    div.classList.add(nombreClase);
    return div;
}

const mostrarImagen = (contenedor: HTMLDivElement, numImagen: number) => {
    contenedor.innerHTML = `
    <img src="./imagenes/${numImagen}.png" alt="animal-${numImagen}"/>
    `
    contenedor.className = "carta-boca-arriba";

    setTimeout(() => {
        contenedor.className = "carta-boca-abajo";
        contenedor.innerHTML = "";
    }, 3000)
};

export const pintarJuego = () => {
    const divPrincipal = document.getElementById("contenedor");

    if (divPrincipal && divPrincipal instanceof HTMLDivElement) {
        const contenedorCartas = crearDiv("contenedor-cartas");
        divPrincipal.appendChild(contenedorCartas);

        const divCarta1 = crearDiv("carta-boca-abajo");
        contenedorCartas.appendChild(divCarta1);

        divCarta1.addEventListener("click", () => {
            mostrarImagen(divCarta1, 1);
        })

        const divCarta2 = crearDiv("carta-boca-abajo");
        contenedorCartas.appendChild(divCarta2);

        divCarta2.addEventListener("click", () => {
            mostrarImagen(divCarta2, 2);
        })
    }
}







