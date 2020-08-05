import React, {useEffect, useState} from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationOverview from "./component/ApplicationOverview/ApplicationOverview";
import Navigation from "./component/Navigation/Navigation";
import RunsOverview from "./component/RunsOverview/RunsOverview";
import {getApplications} from "./client/testoryClient";

function App() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        getApplications()
            .then(result => setApplications(result))
            .catch(error => console.log(error));
    }, []);

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Navigation/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RunsOverview applications={applications}/>
                </Col>
            </Row>
            <Row>
                <Col><ApplicationOverview applications={applications}/></Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
