import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Chart from "react-google-charts";
import {getInstableTests} from "../../client/testoryClient";

export default () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        getInstableTests().then(tests => setTests(tests));
    }, [])

    const mapData = () => {
        return tests.map(test => [test.application, test.package, test.class, test.count]);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Least stable tests</Card.Title>
                <Chart
                    width={'500px'}
                    height={'250px'}
                    chartType="Table"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            { type: 'string', label: 'Application' },
                            { type: 'string', label: 'Package' },
                            { type: 'string', label: 'Class' },
                            { type: 'number', label: 'Count'}
                        ],
                        ...mapData()
                    ]}
                    options={{
                        showRowNumber: true,
                        width: '100%'
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </Card.Body>
        </Card>
    )
}