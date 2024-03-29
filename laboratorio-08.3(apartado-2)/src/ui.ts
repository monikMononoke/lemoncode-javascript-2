export const pintarAnimal = () => {
    const divPrincipal = document.getElementById("contenedor");

    const divContenedorImagen = document.createElement('div');
    divContenedorImagen.classList.add("contenedor-imagen")

    const cartaBocaAbajo = document.createElement('div');
    cartaBocaAbajo.classList.add("carta-boca-abajo");


    divPrincipal?.appendChild(divContenedorImagen);
    divContenedorImagen.appendChild(cartaBocaAbajo);

    cartaBocaAbajo.addEventListener("click", () => {
        const imgAnimal = document.createElement('img');
        imgAnimal.classList.add("carta-boca-arriba");
        imgAnimal.src = "./imagenes/1.png";
        divContenedorImagen.removeChild(cartaBocaAbajo)
        divContenedorImagen.appendChild(imgAnimal);

        setTimeout(() => {
            divContenedorImagen.removeChild(imgAnimal);
            divContenedorImagen.appendChild(cartaBocaAbajo)
        }, 3000)
    })
}

