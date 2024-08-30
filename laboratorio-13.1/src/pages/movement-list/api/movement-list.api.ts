import Axios from 'axios';
import { MovementList } from './movement-list.api-model';

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementList = (accountId: string): Promise<MovementList[]> =>
    Axios.get<MovementList[]>(urlMovements, { params: { accountId } }).then(
        ({ data }) => data
    );