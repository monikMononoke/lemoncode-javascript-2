const patronEnlacesAImagenes = /^\s{0,25}<img(\s)?src\=\"http\:\/\/localhost\:3000\/\.\/\w{3,12}\.(webp|jpg|jpeg|png)"(\s?)\/>$/gm

export const buscaEnlaces = (texto: string): string[] => {
    return texto.match(patronEnlacesAImagenes) || [];
};

