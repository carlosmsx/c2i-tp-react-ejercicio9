import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cita-card.css";

const Cita = (props) => {
    return (
        <div className="my-2 col-12 col-sm-6 col-md-4 col-lg-3">
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
            <Card.Body>
                <Card.Text>{props.cita.sintomas}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-end">
                <Button variant="danger" onClick={()=>{props.borrarCita(props.cita);}}>Borrar</Button>
            </Card.Footer>
        </Card>
        </div>
    );
};

export default Cita;
