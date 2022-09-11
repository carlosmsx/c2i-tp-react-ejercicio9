import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './formulario.css'
import Citas from './Citas'
import { cantidadCaracteres } from "./helpers";

const Formulario = () => {
    const [citas, setCitas] = useState([]);

    const [nombreMascota, setNombreMascota] = useState("");
    const [nombreDuenio, setNombreDuenio] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");

    useEffect(()=>{
        let citasGuardadas = JSON.parse(localStorage.getItem('key-ejercicio9-tp-react')) || [];
        setCitas(citasGuardadas);
    }, []);

    const borrarCita = (cita) =>
    {
        //Lo correcto sería borrar usando un ID...
        const nuevoVector = citas.filter((item)=>{ return (item.nombreMascota!==cita.nombreMascota) })
        setCitas(nuevoVector);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        //validar lo que haga falta
        if (cantidadCaracteres(nombreMascota, 2, 30) 
            && cantidadCaracteres(nombreDuenio, 2, 20) ) 
        {
            let nuevaCita = {
                nombreMascota,
                nombreDuenio,
                fecha,
                hora,
                sintomas
            };

            const nuevoVector = [...citas, nuevaCita]; //Es necesario hacer este vector auxiliar porque setCitas es una queue y puede no estar actualizada al momento de guardar en el localstorage
            setCitas(nuevoVector);
            localStorage.setItem('key-ejercicio9-tp-react', JSON.stringify(nuevoVector));
            e.target.reset();
        }
        else {
            console.log("no pasa naranja");
        }
    }

    return (
        <div className="container">
            <Card className="cardShadow">
                <Card.Header><h5>Llenar el formulario para crear una cita</h5></Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Card.Body className="fondoFormulario">
                        <Form.Group as={Row} className="mb-3" controlId="formNombreMascota">
                            <Form.Label column sm="3" className="text-start">Nombre Mascota:</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="nombre de mascota" onChange={e=>setNombreMascota(e.target.value)} value={nombreMascota} minLength={2} maxLength={30} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formNombreDuenio">
                            <Form.Label column sm="3" className="text-start">Nombre Dueño:</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Nombre de dueño" onChange={e=>setNombreDuenio(e.target.value)} value={nombreDuenio} minLength={2} maxLength={30} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formFecha">
                            <Form.Label column sm="2" className="text-start">Fecha:</Form.Label>
                            <Col sm="4">
                                <Form.Control type="date" placeholder="dd/mm/yyyy" onChange={e=>setFecha(e.target.value)} value={fecha} required/>
                            </Col>
                            <Form.Label column sm="2" className="textJustify">Hora:</Form.Label>
                            <Col sm="4">
                                <Form.Control type="time" placeholder="hh:mm" onChange={e=>setHora(e.target.value)} value={hora} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formSintomas">
                            <Form.Label column sm="3" className="text-start">Sintomas:</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="describir los sintomas" onChange={e=>setSintomas(e.target.value)} value={sintomas} required/>
                            </Col>
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="primary" type="submit">Agregar nueva cita</Button>
                    </Card.Footer>
                </Form>
            </Card>
            <Citas citas={citas} borrarCita={borrarCita}/>
        </div>
    );
};

export default Formulario;
