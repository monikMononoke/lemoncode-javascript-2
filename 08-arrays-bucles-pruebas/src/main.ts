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
    fichaDiv.appendChild(parrafoEdad);

    div?.appendChild(fichaDiv);
}

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for(let i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];
    if(paciente.especialidad == 'Pediatra'){
      mostrarPaciente(paciente, 'pacientes-menores');
    }
  }
  return pacientes;
};

const obtenPacientesAsignadosAPediatriaMenoresADiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for(let i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];
    if(paciente.edad < 10){
      mostrarPaciente(paciente, 'menores-a-diez');
    }
  }
  return pacientes;
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  let i = 0;
  while(pacientes[i].frecuenciaCardiaca < 100 && pacientes[i].temperatura < 39) {
    activarProctolo = false;
    if(!activarProctolo) {
      mostrarPaciente(pacientes[i], 'protocolo');
    }
    i++;
  }

  return activarProctolo;
};

function obtenerPacientes(funcion : Function, pacientesAObtener : Pacientes[]) {
  return  funcion(pacientesAObtener);
}

console.log(pacientes);

const botonObtenerPacientesMenores = document.getElementById('boton-menores');
if(botonObtenerPacientesMenores && botonObtenerPacientesMenores instanceof HTMLButtonElement) {
  botonObtenerPacientesMenores.addEventListener('click',function (){
    obtenerPacientes(obtenPacientesAsignadosAPediatria, pacientes)
    botonObtenerPacientesMenores.disabled = true;
    })
}

const botonObtenerPacientesMenoresADiezAnios = document.getElementById('boton-menores-diez');
if(botonObtenerPacientesMenoresADiezAnios && botonObtenerPacientesMenoresADiezAnios instanceof HTMLButtonElement) {
  botonObtenerPacientesMenoresADiezAnios.addEventListener('click',function (){
    obtenerPacientes(obtenPacientesAsignadosAPediatriaMenoresADiezAnios, pacientes);
    botonObtenerPacientesMenoresADiezAnios.disabled = true;
    })
}

const botonActivarProtocoloUrgencia = document.getElementById('boton-urgencia');
if(botonActivarProtocoloUrgencia && botonActivarProtocoloUrgencia instanceof HTMLButtonElement) {
  botonActivarProtocoloUrgencia.addEventListener('click',function (){
    obtenerPacientes(activarProtocoloUrgencia, pacientes);
    botonActivarProtocoloUrgencia.disabled = true;
    })
}