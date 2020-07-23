import React from 'react';

const Cita = ({turno, eliminarCita}) => {
    return ( 
        <div className='citas'>
            <p>Mascota: <span>{turno.mascota}</span></p>
            <p>Dueño: <span>{turno.dueño}</span></p>
            <p>Fecha: <span>{turno.fecha}</span></p>
            <p>Hora: <span>{turno.hora}</span></p>
            <p>Sintomas: <span>{turno.sintomas}</span></p>

            <button 
                className='botonEliminar'
                onClick={()=> eliminarCita(turno.id)}
            >Eliminar</button>
        </div>
    );
}
 
export default Cita;
