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



const mostrarPacientes = (paciente : Pacientes, divName : string) => {
    const div = document.getElementById('pacientes');
    
    const h3 = document.createElement('h3');
    h3.textContent = `Ficha del paciente: ${paciente.nombre} `;
    
    const fichaDiv = document.createElement('div');

    const datos = document.createElement('p');
    
    datos.innerHTML = `Especialidad: ${paciente.especialidad}.
    Nombre: ${paciente.nombre}.
    Apellidos: ${paciente.apellidos}.  
    Sexo: ${paciente.sexo}.
    Temperatura: ${paciente.temperatura}.
    Edad: ${paciente.edad}`;

    div?.appendChild(h3);
    fichaDiv.appendChild(h3);

    div?.setAttribute('class', 'container');
    fichaDiv.setAttribute('class', 'ficha');
    fichaDiv.setAttribute('id', divName);

    fichaDiv.appendChild(datos);
    div?.appendChild(fichaDiv);
}


const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
  ): Pacientes[] => {
  let nuevoArrayPacientesPediatria : Pacientes[] = [];
    for(let i=0; i<pacientes.length; i++) {
      if(pacientes[i].especialidad == 'Pediatra') {
        let paciente = pacientes[i];
        nuevoArrayPacientesPediatria.push(paciente);
        mostrarPacientes(paciente, 'pacientes-pediatria'); 
      }
    }
    return nuevoArrayPacientesPediatria
}

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let nuevoArrayPacientesPediatriaMenoresDeDiez : Pacientes[] = [];
  for(let i=0; i<pacientes.length; i++) {
    if(pacientes[i].edad < 10) {
      let paciente = pacientes[i];
      nuevoArrayPacientesPediatriaMenoresDeDiez.push(paciente);
      mostrarPacientes(paciente, 'pacientes-menores-a-diez'); 
    }
  }
  return pacientes;
};


const botonPediatria = document.getElementById('boton1');
if(botonPediatria && botonPediatria instanceof HTMLButtonElement) {
  botonPediatria.addEventListener('click', ()=> obtenPacientesAsignadosAPediatria(pacientes))
}

const botonMenoresADiez = document.getElementById('boton2');
if(botonMenoresADiez && botonMenoresADiez instanceof HTMLButtonElement) {
  botonMenoresADiez.addEventListener('click', () => obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))
}
