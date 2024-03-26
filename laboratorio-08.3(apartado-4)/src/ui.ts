export const pintarJuego = () => {
    const cardList: NodeListOf<HTMLDivElement> = document.querySelectorAll('.carta');

    const imagenes: NodeListOf<HTMLImageElement> = document.querySelectorAll('.imagenes');

    cardList.forEach((card, index) => {
        card.addEventListener("click", () => {
            card.style.transform = "rotateY(-180deg)";
            imagenes[index].src = `./imagenes/${index + 1}.png`;
            console.log(imagenes);
        });
    });
}







