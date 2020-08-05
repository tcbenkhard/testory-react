import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {getInstableTests} from "../../client/testoryClient";
import Table from "react-bootstrap/Table";

export default () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        getInstableTests().then(tests => setTests(tests));
    }, [])

    const renderTableBody = () => {
        return tests.map(t => <tr>
            <td>{t.application}</td>
            <td>{t.package}</td>
            <td>{t.class}</td>
            <td>{t.count}</td>
        </tr>)
    }

    const renderBootstrapTable = () => {
        return (
            <Table hover size="sm">
                <thead>
                <tr>
                    <th>Application</th>
                    <th>Class</th>
                    <th>Method</th>
                    <th>Count</th>
                </tr>
                </thead>
                <tbody>
                    {renderTableBody()}
                </tbody>
            </Table>
        )
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Least stable tests</Card.Title>
                {renderBootstrapTable()}
            </Card.Body>
        </Card>
    )
}
