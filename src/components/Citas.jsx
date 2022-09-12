import React from "react";
import Card from "react-bootstrap/Card";
import Cita from "./Cita";
import './citas.css'

const Citas = (props) => {
    return (
        <Card className="mt-5 cardShadow">
            <Card.Header className="text-center"><h5>{props.citas.length===0?"No hay citas":"Citas"}</h5></Card.Header>
            <Card.Body className="">
                <div className="row justify-content-start">
                {
                    props.citas.map((item,pos)=>{
                        return <Cita key={pos} cita={item} borrarCita={props.borrarCita}/>
                    })
                }
                </div>
            </Card.Body>
        </Card>
    );
};

export default Citas;
