import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cita-card.css";

const Cita = () => {
    return (
        <Card className="text-center m-2">
            <Card.Header className="text-start">
                <section className="row">
                    <aside className="col-2 px-0 d-flex flex-column justify-content-center">
                        <span className="dot"></span>
                    </aside>
                    <aside className="col-10 ps-2">
                        Mascota: Firulais
                        <br />
                        <span className="text-muted">Dueño: Carlos</span>
                    </aside>
                </section>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
            <Card.Footer className="text-end">
                <Button variant="danger">Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Cita;
