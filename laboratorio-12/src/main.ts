import './styles.css';
import { ReservaHotel, reservaOperador, reservaParticular } from "./reservasHotel";
import { PrecioReserva, reservas } from "./reservasHotel.model";

const clienteParticular = new reservaParticular(reservas);

const clienteOperador = new reservaOperador(reservas);


const calcularTotalReserva = (cliente: ReservaHotel): PrecioReserva => {
    const totalCliente = cliente.calcularTotal();
    const subtotalCliente = cliente.calcularSubtotal();
    return {
        total: totalCliente.toFixed(2),
        subtotal: subtotalCliente.toFixed(2)
    }
}

const pintarReserva = (reserva: PrecioReserva, tipoDeReserva: string): HTMLDivElement => {
    const div = document.querySelector('#reserva');
    const divReserva = document.createElement('div');
    divReserva.classList.add('reserva');
    if (div instanceof HTMLDivElement) {
        divReserva.innerHTML = `
            <h3>Tipo de reserva: ${tipoDeReserva} </h3>
            <p>Subtotal: ${reserva.subtotal}</p>
            <p>Total: ${reserva.total}</p>
        `;
        div.appendChild(divReserva);
    }
    return divReserva;
}

pintarReserva(calcularTotalReserva(clienteParticular), 'Cliente particular');
pintarReserva(calcularTotalReserva(clienteOperador), 'Operador de viajes');
