import axios from 'axios';
import { Caracters } from './personaje-listado.model';

export const obtenerListadoDePersonajes = async (): Promise<Caracters[]> => {
    try {
        const { data } = await axios.get('http://localhost:3000/personajes');
        return data;
    } catch (error) {
        throw new Error('Error al obtener el listado de personajes');
    }
}
