import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './formulario.css'
import Citas from './Citas'

const Formulario = () => {
    return (
        <div className="container">
            <Card>
                <Card.Header><h5>Llenar el formulario para crear una cita</h5></Card.Header>
                <Card.Body className="fondoFormulario">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formNombreMascota">
                            <Form.Label column sm="3" className="text-start">Nombre Mascota:</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="nombre de mascota" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formNombreDuenio">
                            <Form.Label column sm="3" className="text-start">Nombre Dueño:</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Nombre de dueño" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formFecha">
                            <Form.Label column sm="3" className="text-start">Fecha:</Form.Label>
                            <Col sm="3">
                                <Form.Control type="date" placeholder="dd/mm/yyyy" />
                            </Col>
                            <Form.Label column sm="2" className="textJustify">Hora:</Form.Label>
                            <Col sm="3">
                                <Form.Control type="time" placeholder="hh:mm" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formSintomas">
                            <Form.Label column sm="3" className="text-start">Sintomas:</Form.Label>
                            <Col sm="9">
                                <Form.Control type="email" placeholder="describir los sintomas" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="primary" type="submit">Agregar nueva cita</Button>
                </Card.Footer>
            </Card>
            <Citas/>
        </div>
    );
};

export default Formulario;
