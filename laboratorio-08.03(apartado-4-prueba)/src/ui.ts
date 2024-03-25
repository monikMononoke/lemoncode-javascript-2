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

        for (let i = 1; i <= 6; i++) {
            const divCarta = crearDiv("carta-boca-abajo");
            divCarta.id = `${i}`;
            contenedorCartas.appendChild(divCarta);

            divCarta.addEventListener("click", () => {
                mostrarImagen(divCarta, i)
            });
        }
        for (let j = 1; j <= 6; j++) {
            const divCarta = crearDiv("carta-boca-abajo");
            divCarta.id = `${j}`;
            contenedorCartas.appendChild(divCarta);

            divCarta.addEventListener("click", () => {
                mostrarImagen(divCarta, j)
            })
        }
    }
}







