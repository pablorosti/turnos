import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4';


const Formulario = ({crearTurno}) => {

    //Crear el state de turnos
    const [turno, setTurno] = useState({
        mascota:'',
        dueño:'', 
        fecha:'', 
        hora:'', 
        sintomas:''
    });

    const [error, setError] = useState(false);

    //Funcion que se ejecuta cuando el usuario esta escribiendo
    const actualizarState = (e)=>{
        setTurno({
            ...turno, 
            [e.target.name]: e.target.value
        }) 
    }
    //Extrater los valores
    //const {mascota, dueño, fecha, hora, sintomas} = turno;

    //Cuando el usuario preciona agregar formulario
    const submitTurno = (e)=>{
        e.preventDefault();
        
        //Validar
        if(turno.mascota.trim()==='' || turno.dueño.trim()==='' ||
           turno.fecha.trim()==='' || turno.hora.trim()==='' ||
           turno.sintomas.trim()===''){
                setError(true);
                return;
        }
        setError(false);

        //Asignar ID
        turno.id = uuid();

        //Crear el turno
        crearTurno(turno);

        //Reiniciar el formulario
        setTurno({
            mascota:'',
            dueño:'', 
            fecha:'', 
            hora:'', 
            sintomas:''
        });
    }

    return ( 
        <Fragment>
            <h2>Crear turno</h2>
            {error ? <p className='error'>Todos los campos son obligatorios</p> :null}
            <form onSubmit ={submitTurno}>
                <label htmlFor="">Nombre mascota</label>
                <input type="text"
                       name='mascota'
                       placeholder='nombre de mascota'
                       onChange={actualizarState}
                       value={turno.mascota}
                />

                <label htmlFor="">Nombre dueño</label>
                <input type="text"
                       name='dueño'
                       placeholder='nombre del dueño'
                       onChange={actualizarState}
                       value={turno.dueño}
                />

                <label htmlFor="">Fecha</label>
                <input type="date"
                       name='fecha'
                       onChange={actualizarState}
                       value={turno.fecha}
                />

                <label htmlFor="">Hora</label>
                <input type="time"
                       name='hora'
                       onChange={actualizarState}
                       value={turno.hora}
                />

                <label htmlFor="">Sintomas</label>
                <textarea name="sintomas"
                          onChange={actualizarState}
                          value={turno.sintomas}>   
                          
                </textarea>

                <button type='submit' >Agregar turno</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;