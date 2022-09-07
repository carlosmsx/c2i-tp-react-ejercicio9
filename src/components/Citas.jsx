import React from "react";
import Card from "react-bootstrap/Card";
import './citas.css'

const Citas = () => {
    return (
        <Card className="mt-5">
            <Card.Header className="text-center"><h5>No hay citas</h5></Card.Header>
            <Card.Body className="fondoLista">
                <p></p>
            </Card.Body>
        </Card>
    );
};

export default Citas;
