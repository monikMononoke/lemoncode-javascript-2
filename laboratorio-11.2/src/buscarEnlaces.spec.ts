import { buscaEnlaces } from "./buscarEnlaces";

describe('buscarEnlaces', () => {
    it('debería devolver un array vacío si no se le pasa ningún enlace', () => {
        const texto = '';

        const resultado = buscaEnlaces(texto);

        expect(resultado).toEqual([]);
    })

    it('debería devolver un array con un enlace si se le pasa un enlace', () => {
        const texto = '<img src="http://localhost:3000/./imagen.jpg"/>';

        const resultado = buscaEnlaces(texto);

        expect(resultado).toEqual(['<img src="http://localhost:3000/./imagen.jpg"/>']);
    })
})

