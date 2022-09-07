import React from "react";
import Card from "react-bootstrap/Card";
import Cita from "./Cita";
import './citas.css'

const Citas = () => {
    return (
        <Card className="mt-5 cardShadow">
            <Card.Header className="text-center"><h5>No hay citas</h5></Card.Header>
            <Card.Body className="fondoLista d-flex">
                <Cita className="col-12 col-sm-6 col-md-4 col-lg-3"/>
                <Cita className="col-12 col-sm-6 col-md-4 col-lg-3"/>
                <Cita className="col-12 col-sm-6 col-md-4 col-lg-3"/>
            </Card.Body>
        </Card>
    );
};

export default Citas;
