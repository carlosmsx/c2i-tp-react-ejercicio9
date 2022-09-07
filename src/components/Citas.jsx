import React from "react";
import Card from "react-bootstrap/Card";

const Citas = () => {
    return (
        <Card className="mt-4">
            <Card.Header className="text-center"><h5>No hay citas</h5></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default Citas;
