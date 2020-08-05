import React from "react";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

export default ({applications}) => {

    const renderApplications = () => {
        return applications.map(application => (<ApplicationCard key={application.id} application={application}/>));
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Applications</Card.Title>
                <ListGroup>
                    {renderApplications()}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}