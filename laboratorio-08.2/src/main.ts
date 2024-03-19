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


//Apartado 1 (a) - extraer la lista de pacientes asignados a Pediatria
console.log('APARTADO 1: ');
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] =>
  pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === 'Pediatra'
  );

console.log('Pacientes asignados a pediatria', obtenPacientesAsignadosAPediatria(pacientes));

//Apartado 1 (b) - pacientes asignados a pediatría, menores a diez años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesEncontrados = pacientes.filter((paciente: Pacientes) =>
    paciente.especialidad === 'Pediatra' && paciente.edad < 10
  )
  return pacientesEncontrados
};

console.log(
  'Pacientes asignados a pediatría, menores de diez años',
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

console.log('*************************************************************');


//Apartado 2 - activar protocolo de urgencia
console.log('APARTADO 2: ');

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  pacientes.some(
    (paciente: Pacientes) => {
      if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
        activarProctolo = true;
      }
    })
  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

console.log('*************************************************************');

//Apartado 3 - reasignar pacientes de pediatría a medico de familia
console.log('APARTADO 3: ');

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  //refactorizado
  return pacientes.map((paciente) =>
    (paciente.especialidad === 'Pediatra')
      ? {
        ...paciente,
        especialidad: 'Medico de familia',
      }
      : {
        ...paciente
      }
  )
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

console.log('*************************************************************');

//Apartado 4 - Podemos mandar al pediatra a casa ? 
console.log('APARTADO 4: ');

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente: Pacientes) => paciente.especialidad === 'Pediatra')
};
console.log('El pediatra tiene pacientes? ', HayPacientesDePediatria(pacientes));

console.log('*************************************************************');

//Apartado 5:
console.log('APARTADO 5: ');

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}


const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const pediatriaTotal = pacientes.reduce(
    (total : number, paciente: Pacientes) : number => {
    if(paciente.especialidad === 'Pediatra') 
      total = total + 1;
      return total
    }, 0
  )
  
  const medicoDeFamiliaTotal = pacientes.reduce(
    (total : number, paciente: Pacientes) : number => {
    if(paciente.especialidad === 'Medico de familia') 
      total = total + 1;
      return total
    }, 0
  )
  
  const cardiologiaTotal = pacientes.reduce(
    (total : number, paciente: Pacientes) : number => {
    if(paciente.especialidad === 'Cardiólogo') 
      total = total + 1;
      return total
    }, 0
  )
  
  let numeroPacientesPorEspecialidad : NumeroPacientesPorEspecialidad = {
    medicoDeFamilia : medicoDeFamiliaTotal,
    pediatria: pediatriaTotal,
    cardiologia: cardiologiaTotal
  }

  return numeroPacientesPorEspecialidad
};

console.log('Objeto con los medicos totales por especialidad: ');
console.log(cuentaPacientesPorEspecialidad(pacientes));
