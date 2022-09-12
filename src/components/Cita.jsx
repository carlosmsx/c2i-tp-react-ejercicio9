import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cita-card.css";

const Cita = (props) => {
    return (
        <div className="my-2 col-12 col-md-6 col-lg-4">
        <Card className="text-center">
            <Card.Header className="text-start">
                <section className="row">
                    <aside className="col-2 px-0 d-flex flex-column justify-content-center">
                        <span className="dot"></span>
                    </aside>
                    <aside className="col-10 ps-2">
                        Mascota: {props.cita.nombreMascota}
                        <br />
                        <span className="text-muted">Dueño: {props.cita.nombreDuenio}</span>
                    </aside>
                </section>
            </Card.Header>
            <Card.Body className="row text-start m-0 fondoLista">
                <div className="px-0 my-1 col-3">Fecha:</div><div className="my-1 col-9 fondoBlanco">{props.cita.fecha}</div>
                <div className="px-0 my-1 col-3">Hora:</div><div className="my-1 col-9 fondoBlanco">{props.cita.hora}</div>
                <div className="px-0 my-1 col-3">Síntomas:</div><div className="my-1 col-9 fondoBlanco">{props.cita.sintomas}</div>
            </Card.Body>
            <Card.Footer className="text-end">
                <Button variant="danger" onClick={()=>{props.borrarCita(props.cita);}}>Borrar</Button>
            </Card.Footer>
        </Card>
        </div>
    );
};

export default Cita;
