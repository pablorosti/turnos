import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';

function App() {

  //Citas en localStorage
  let turnosIniciales = JSON.parse(localStorage.getItem('turnos'));
  if(turnosIniciales === null){
    turnosIniciales = [];
  }

  //Arreglo de turnos
  const [turnos, guardarTurnos] = useState(turnosIniciales);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( ()=>{
    if(turnosIniciales){
      localStorage.setItem('turnos', JSON.stringify(turnos));
    }else{
      localStorage.setItem('turnos', JSON.stringify([]));
    }
  }, [turnos, turnosIniciales] );
  
  //funcion que tome las citas actuales y agrege la nueva
  const crearTurno = (turno)=>{
    guardarTurnos([
      ...turnos, 
      turno
    ]);
  }

  //funcion que elimina una cita por su id
  const eliminarCita = id =>{
    const nuevosTurnos = turnos.filter( turno => turno.id !== id);
    guardarTurnos(nuevosTurnos);
  }

  //mensaje condiconal
  const titulo = turnos.length === 0 ? 'No hay turnos' : 'Administra tus turnos';

  return (
    <Fragment>
      <h1>Turnos</h1>
      <div className='contenedor grid'>
        <div>
          <Formulario
            crearTurno={crearTurno}
          />
        </div>
        <div>
          <h2>{titulo}</h2>
          {turnos.map(turno => (
            <Cita
              key={turno.id}
              turno={turno}
              eliminarCita={eliminarCita}
            />
          ))}
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
