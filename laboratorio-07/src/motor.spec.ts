import {describe, it, expect, vi} from "vitest";
import {generarNumeroCarta, puntos} from "./modelo";
import {evaluarResultadoMePlanto, obtenerPuntoCarta, gestionarPartidaFalsa, generarNumeroAleatorio} from "./motor";

describe('gestionarPartidaFalsa', () => {
    it("Debe devolver 'Te has pasado' si los puntos superan 7.5", () => {
        //Arrange 
        const puntosPartida : number = 8;
        const resultadoEsperado = 'Te has pasado';

        //Act
        const resultado = gestionarPartidaFalsa(puntosPartida);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })

    it("Debe devolver 'Lo has clavado' si los puntos obtenidos son iguales a 7.5", () => {
        //Arrange
        const puntosPartida : number = 7.5;
        const resultadoEsperado = 'Lo has clavado';

        //Act
        const resultado = gestionarPartidaFalsa(puntosPartida);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })

    it("Debe devolver 'Puedes hacerlo mejor' si los puntos obtenidos son menos que 7.5", () => {
        //Arrange
        const puntosPartida : number = 6;
        const resultadoEsperado = 'Puedes hacerlo mejor';

        //Act
        const resultado = gestionarPartidaFalsa(puntosPartida);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})

describe('generarNumeroAleatorio', () => {
    it('Debe devolver un número aleatorio entre 1 y 10', () => {
        //Arrange 
        const numeroEsperado : number = 5;

        vi.spyOn(global.Math, 'random').mockReturnValue(0.49);

        //Act 
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);
    })
})


describe('generarNumeroCarta', () => {
    it('Debe devolver un numero entre 1 y 7, si el número aleatorio es igual o menor a 7', () => {
        //Arrange
        const numeroAleatorio : number  = 4;
        const resultadoEsperado : number = 4;

        //Act 
        const resultado = generarNumeroCarta(numeroAleatorio);

        //Assert 
        expect(resultado).toBe(resultadoEsperado);
    });

    it('Al numero aleatorio se le suma 2 si es mayor a 7 y menor a 10', () => {
        //Arrgane
        const numeroAleatorio : number = 8;
        const resultadoEsperado : number = 10;
        //Act
        const resultado = generarNumeroCarta(numeroAleatorio);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})

describe('obtenerPuntoCarta', () => {
    it('Debe devolver un numero entre 1 y 7, si el numero es menor o igual a 7', () => {
        //Arrange
        const puntoCarta : number= 5;
        
        //Act
        const resultado = obtenerPuntoCarta(puntoCarta);

        //Assert
        expect(resultado).toBe(5);
        
    })

    it('Debe devolver 0.5 si el numero es mayor a 7', () => {
        //Arrange
        const puntoCarta = 10;

        //Act 
        const resultado = obtenerPuntoCarta(puntoCarta);

        //Assert
        expect(resultado).toBe(0.5);

    }) 
})

describe('evaluarResultadoMePlanto', ()=> {
    it("Si el numero es <= 4.5, el resultado será 'Has sido muy conservador!'", () => {
        //Arrange
        let puntosTotales :  number = 4;
        let resultadoEsperado = 'Has sido muy conservador!';

        vi.spyOn(puntos, 'puntosTotales', 'get').mockReturnValue(puntosTotales);
        //Act
        const resultado = evaluarResultadoMePlanto();

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si el numero es == 5, el resultado será 'Te ha entrado el canguelo eh?'", () => {
        //Arrange
        let puntosTotales :  number = 5;
        let resultadoEsperado = 'Te ha entrado el canguelo eh?';

        vi.spyOn(puntos, 'puntosTotales', 'get').mockReturnValue(puntosTotales);
        //Act
        const resultado = evaluarResultadoMePlanto();

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si el numero es == 6, el resultado será 'Casi casi...'", () => {
        //Arrange
        let puntosTotales :  number = 6;
        let resultadoEsperado = 'Casi casi...';

        vi.spyOn(puntos, 'puntosTotales', 'get').mockReturnValue(puntosTotales);
        //Act
        const resultado = evaluarResultadoMePlanto();

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Si el numero es == 7.5, el resultado será '! Lo has clavado! Enhorabuena!'", () => {
        //Arrange
        let puntosTotales :  number = 7.5;
        let resultadoEsperado = '! Lo has clavado! Enhorabuena!';

        vi.spyOn(puntos, 'puntosTotales', 'get').mockReturnValue(puntosTotales);
        //Act
        const resultado = evaluarResultadoMePlanto();

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
})