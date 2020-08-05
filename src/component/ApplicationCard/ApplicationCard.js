import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import RunHistory from "../RunHistory/RunHistory";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ApplicationCard.css';
import orbGreen from './orb_green.png';
import orbRed from './orb_red.png';

export default (props) => {
    const runs = props.application.Testruns;
    console.log('all runs', runs);
    const latestRun = runs[runs.length-1];
    console.log('latest', latestRun);

    const renderInfo = () =>  {
        if(latestRun)
            return (<div className={'card-info'}>succeeded: {latestRun.succeeded}, failed: {latestRun.errors}, skipped: {latestRun.skipped}</div>)
    }

    const renderOrb = () => {
        if(latestRun) {
            if(latestRun.errors === 0)
                return (<img src={orbGreen} alt={'success'} height={50}/>)
            else
                return (<img src={orbRed} alt={'failed'} height={50}/>)
        }
    }

    return (
        <ListGroup.Item>
            <Row>
                <Col xs={1}>
                    {renderOrb()}
                </Col>
                <Col>
                    <div>{props.application.name} (Last run: {latestRun ? new Date(latestRun.createdAt).toDateString() : 'never'})</div>
                    {renderInfo()}
                </Col>
                <Col>
                    <RunHistory runs={props.application.Testruns} />
                </Col>
            </Row>


        </ListGroup.Item>
    )
}
