//variable que contiene el contador
let numeroActual : number = 1;


//función principal
//actualiza el turno en el elemento h1
//en h1 he cambiado class por id para que me funcione el código
function actualizarNumero() {
    const numeroTurno = document.getElementById("numero-turno");
    if(numeroTurno !== null && numeroTurno !== undefined) {
        numeroTurno.innerHTML = numeroActual.toString().padStart(2, '0');
    }
};



//función que maneja el botón para elegir turno
function handleElegir() {
    const elementoInput = document.getElementById("elegir-turno");
    if(elementoInput !== null && elementoInput !== undefined && elementoInput instanceof HTMLInputElement) {
    numeroActual = parseInt(elementoInput.value);
    actualizarNumero();
    }
}

//botón para introducir un número a elección del operario
const elegirBtn = document.getElementById("boton-elegir");
if(elegirBtn !== null && elegirBtn !== undefined && elegirBtn instanceof HTMLButtonElement) {
elegirBtn.addEventListener("click", () => handleElegir());
}



//función que maneja el botón anteriotBtn
function handleAnterior() {
    if(numeroActual > 1) {
        numeroActual--;
        actualizarNumero();
    }
}

//botón para disminuir el valor del contador
const anteriorBtn = document.getElementById("anterior");
if(anteriorBtn !== null && anteriorBtn !== undefined && anteriorBtn instanceof HTMLButtonElement) {
anteriorBtn.addEventListener("click", () => handleAnterior());
}



//función que maneja el botón siguienteButn
function handleSiguiente() {
    numeroActual++;
    actualizarNumero();
}

//botón para aumentar el valor del contador
const siguienteBtn = document.getElementById("siguiente");
if(siguienteBtn !== null && siguienteBtn !== undefined && siguienteBtn instanceof HTMLButtonElement) {
siguienteBtn.addEventListener("click", () => handleSiguiente());
}



//función que maneja el botón para resetear
function handleReset() {
    numeroActual = 1;
    actualizarNumero(); 
}

//botón para resetear el valor del contador
const resetearBtn = document.getElementById("resetear");
if(resetearBtn !== null && resetearBtn !== undefined && resetearBtn instanceof HTMLButtonElement) {
resetearBtn.addEventListener("click", () => handleReset());
}











