import { Reserva } from "./reservasHotel.model";

export class ReservaHotel {
    iva = 21;
    subtotal = 0;
    total = 0;
    _desayuno = 15;
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
                return acc + (reserva.noches * 100);
            } else {
                return acc + (reserva.noches * 150);
            }
        }, 0);
        return this.subtotal;
    }

    calcularTotal() {
        this.subtotal = this.calcularSubtotal();
        this.total = this.subtotal + (this.subtotal * this.iva / 100);
        return this.total;
    }
}


export class reservaParticular extends ReservaHotel {
    costeAdicional = 40;

    constructor(reservas: Reserva[]) {
        super(reservas);
    }

    calcularSubtotal() {
        this.subtotal = super.calcularSubtotal();
        const pax = this.getPax();

        pax.forEach(pax => {
            if (pax > 1) {
                this.subtotal += this.costeAdicional;
            } else {
                this.subtotal += 0;
            }
        })

        return this.subtotal;
    }

    calcularTotal() {
        this.subtotal = this.calcularSubtotal();
        this.total = this.subtotal + (this.subtotal * this.iva / 100);
        return this.total;
    }
}

export class reservaOperador extends ReservaHotel {
    descuentoAdicional = 15;

    constructor(reservas: Reserva[]) {
        super(reservas);
    }

    calcularSubtotal() {
        this.subtotal = this.reservas.reduce((acc, reserva) => {
            return acc + reserva.noches * 100;
        }, 0);
        return this.subtotal;
    }

    calcularTotal() {
        const subtotal = this.calcularSubtotal();
        this.total = subtotal + (subtotal * this.iva / 100);
        return this.total - (this.total * this.descuentoAdicional / 100);
    }
}