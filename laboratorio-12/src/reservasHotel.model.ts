export interface Reserva {
    tipoHabitacion: "standard" | "suite";
    pax: number;
    noches: number;
    desayuno?: boolean;
}

export const reservas: Reserva[] = [
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3,
    },
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4,
    },
    {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1,
    },
];

export interface PrecioReserva {
    total: string;
    subtotal: string;
}

