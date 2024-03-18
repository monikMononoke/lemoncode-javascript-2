type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
      },
      {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
      },
      {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
      },
      {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
      },
      {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
      },
];


//Función para mostrar los pacientes obtenidos en el HTML
const mostrarPaciente = (paciente : Pacientes, divName: string) => {

    const div = document.getElementById(divName);

    const fichaDiv = document.createElement('div');
    
    const h3 = document.createElement('h3');
    h3.textContent = `Ficha del paciente: ${paciente.nombre} `;
  
    const parrafoEspecialidad = document.createElement('p');
    parrafoEspecialidad.textContent = `Especialidad: ${paciente.especialidad}.`;

    const parrafoNombre = document.createElement('p');
    parrafoNombre.textContent = `Nombre: ${paciente.nombre}.`
    
    const parrafoApellidos = document.createElement('p');
    parrafoApellidos.textContent = `Apellidos: ${paciente.apellidos}.`;

    const parrafoSexo = document.createElement('p');
    parrafoSexo.textContent = `Sexo: ${paciente.sexo}.`;
    
    const parrafoTemperatura = document.createElement('p');
    parrafoTemperatura.textContent = `Temperatura: ${paciente.temperatura}.`;
    
    const parrafoFrecuenciaCardiaca = document.createElement('p');
    parrafoFrecuenciaCardiaca.textContent = `Frecuencia cardiaca: ${paciente.frecuenciaCardiaca}`;

    const parrafoEdad = document.createElement('p');
    parrafoEdad.textContent = `Edad: ${paciente.edad}`;


    div?.setAttribute('class', 'container');
    fichaDiv.setAttribute('class', 'ficha');

    fichaDiv.appendChild(h3);

    fichaDiv.appendChild(parrafoEspecialidad);
    fichaDiv.appendChild(parrafoNombre);
    fichaDiv.appendChild(parrafoApellidos);
    fichaDiv.appendChild(parrafoSexo);
    fichaDiv.appendChild(parrafoTemperatura);
    fichaDiv.appendChild(parrafoFrecuenciaCardiaca);
    fichaDiv.appendChild(parrafoEdad);

    div?.appendChild(fichaDiv);
}

//Apartado 1 - pacientes asignados a pediatria
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria : Pacientes[] = [];
  for(let i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];
    if(paciente.especialidad == 'Pediatra'){
      //pacientesPediatria.push(paciente);
      pacientesPediatria = [
        ...pacientesPediatria,
        paciente
      ]
      
      mostrarPaciente(paciente, 'pacientes-menores'); 
    }
  }
  return pacientesPediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//Apartado 1- pacientes asignados a pediatría menores a diez años
const obtenPacientesAsignadosAPediatriaMenoresADiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesMenoresADiezAnios : Pacientes[] = [];
  for(let i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];
    if(paciente.edad < 10){
      pacientesMenoresADiezAnios = [
        ...pacientesMenoresADiezAnios,
        paciente
      ]
      mostrarPaciente(paciente, 'menores-a-diez');
    }
  }
  return pacientesMenoresADiezAnios;
};

console.log(obtenPacientesAsignadosAPediatriaMenoresADiezAnios(pacientes));

//Apartado 2 - activar protocolo de urgencia
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for(let i=0; i<pacientes.length; i++){
    if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39){
      activarProctolo = true;
      break;
    }
  }
  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

//Apartado 3 - reasignar pacientes de pediatría
const reasignarPacientesMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesReasignados : Pacientes [] = [];
  for(let i=0; i<pacientes.length; i++) {
    if(pacientes[i].especialidad == 'Pediatra') {
      pacientes[i].especialidad = 'Medico de familia';
      pacientesReasignados.push(pacientes[i]);
      mostrarPaciente(pacientes[i], 'pacientes-reasignados');
    }
  }
  return pacientesReasignados;
};

//Apartado 4 - el pediatra no se puede ir a casa
const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pacientesAsignadosAPediatria = false;
  for(let i=0; i<pacientes.length; i++) {
    if(pacientes[i].especialidad == 'Pediatra'){
      pacientesAsignadosAPediatria = true;
    }
  }
  return pacientesAsignadosAPediatria;
};
console.log('Hay pacientes asignados a pediatría: ' ,hayPacientesDePediatria(pacientes));

//Función genérica para utilizar en los botónes para obtener los pacientes
function obtenerPacientes(funcion : Function, pacientesAObtener : Pacientes[]) {
  return  funcion(pacientesAObtener);
}

//Botones para obtener los pacientes 

//Botón para obtener los pacientes menores 
const botonObtenerPacientesMenores = document.getElementById('boton-menores');
if(botonObtenerPacientesMenores && botonObtenerPacientesMenores instanceof HTMLButtonElement) {
  botonObtenerPacientesMenores.addEventListener('click',function (){
    obtenerPacientes(obtenPacientesAsignadosAPediatria, pacientes)
    botonObtenerPacientesMenores.disabled = true;
    })
}

//Botón para obtener los pacientes menores a diez años
const botonObtenerPacientesMenoresADiezAnios = document.getElementById('boton-menores-diez');
if(botonObtenerPacientesMenoresADiezAnios && botonObtenerPacientesMenoresADiezAnios instanceof HTMLButtonElement) {
  botonObtenerPacientesMenoresADiezAnios.addEventListener('click',function (){
    obtenerPacientes(obtenPacientesAsignadosAPediatriaMenoresADiezAnios, pacientes);
    botonObtenerPacientesMenoresADiezAnios.disabled = true;
    })
}

//Botón para activar el protocolo de urgencia
const botonActivarProtocoloUrgencia = document.getElementById('boton-urgencia');
if(botonActivarProtocoloUrgencia && botonActivarProtocoloUrgencia instanceof HTMLButtonElement) {
  botonActivarProtocoloUrgencia.addEventListener('click',function (){
    obtenerPacientes(activarProtocoloUrgencia, pacientes);
    botonActivarProtocoloUrgencia.disabled = true;
    })
}

//Botón para reasignar los pacientes de pediatría
const botonReasignarPacientes = document.getElementById('boton-reasignar');
if(botonReasignarPacientes && botonReasignarPacientes instanceof HTMLButtonElement) {
  botonReasignarPacientes.addEventListener('click',function (){
    obtenerPacientes(reasignarPacientesMedicoFamilia, pacientes);
    botonReasignarPacientes.disabled = true;
    })
}



//Apartado 5
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

let pacientesPorEspecialidad : NumeroPacientesPorEspecialidad = {
  medicoDeFamilia : 0,
  pediatria: 0,
  cardiologia: 0,
};

const cuentaPacientesPorEspecialidad = (pacientes : Pacientes[]): NumeroPacientesPorEspecialidad => {
  for(let i=0; i<pacientes.length; i++) {
    switch(pacientes[i].especialidad) {
      case 'Medico de familia':
        pacientesPorEspecialidad.medicoDeFamilia++;
        break;
      case 'Pediatra':
        pacientesPorEspecialidad.pediatria++;
      case 'Cardiólogo':
        pacientesPorEspecialidad.cardiologia++;
        break;
    }
  }
  return pacientesPorEspecialidad;
}
console.log('Pacientes por especialidad: ', cuentaPacientesPorEspecialidad(pacientes));