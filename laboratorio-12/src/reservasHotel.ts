import { Reserva } from "./reservasHotel.model";

export class ReservaHotel {
    iva = 21;
    subtotal = 0;
    total = 0;
    reservas: Reserva[] = [];

    constructor(reservas: Reserva[]) {
        this.reservas = reservas;
    }

    getNoches() {
        return this.reservas.map(reserva => reserva.noches);
    }

    getPax() {
        return this.reservas.map(reserva => reserva.pax);
    }

    getTipoHabitacion() {
        return this.reservas.map(reserva => reserva.tipoHabitacion);
    }

    calcularSubtotal() {
        this.subtotal = this.reservas.reduce((acc, reserva) => {
            if (reserva.tipoHabitacion === "standard") {
                return acc + reserva.noches * 100;
            } else {
                return acc + reserva.noches * 150;
            }
        }, 0);
        return this.subtotal;
    }

    calcularTotal() {
        this.total = this.calcularSubtotal() * (1 + this.iva / 100);
        return this.total;
    }
}


export class reservaParticular extends ReservaHotel {
    costeAdicional = 40;

    constructor(reservas: Reserva[]) {
        super(reservas);
    }

    calcularSubtotal() {
        const subtotal = super.calcularSubtotal();
        return subtotal + this.costeAdicional;
    }

    calcularTotal() {
        this.total = this.calcularSubtotal() * (1 + this.iva / 100);
        return this.total;
    }
}

export class reservaOperador extends ReservaHotel {
    descuentoAdicional = 15;

    constructor(reservas: Reserva[]) {
        super(reservas);
    }

    calcularSubtotal() {
        const subtotal = super.calcularSubtotal();
        return subtotal - (subtotal * this.descuentoAdicional) / 100;
    }

    calcularTotal() {
        this.total = this.calcularSubtotal() * (1 + this.iva / 100);
        return this.total;
    }
}