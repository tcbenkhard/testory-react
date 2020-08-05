import React from "react";
import Card from "react-bootstrap/Card";
import Chart from "react-google-charts";

export default ({applications}) => {

    const mapData = () => {
        // Find the largest count of runs so we can iterate over all of them
        let runCount = 0;
        applications.forEach(app => runCount = app.Testruns.length > runCount ? runCount = app.Testruns.length : runCount);

        // Sum the results of all runs per iteration
        let mappedResults = [];
        for(let i = 0; i < runCount; i++) {
            let errors=0, skipped=0, succeeded=0;
            // eslint-disable-next-line
            applications.forEach(app => {
                // Compensate for applications with less runs than the max
                const compensatedIndex = i - (runCount - app.Testruns.length);
                if(app.Testruns.length > compensatedIndex && compensatedIndex >= 0) {
                    const run = app.Testruns[compensatedIndex];
                    errors += run.errors;
                    skipped += run.skipped;
                    succeeded += run.succeeded;
                }
            });

            mappedResults.push([i, errors, skipped, succeeded]);
        }

        // Add headers
        const data = [
            ['run', 'errors', 'skipped', 'succeeded'],
            ...mappedResults
        ];

        return data;
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Overall</Card.Title>
                <Chart
                    width={'100%'}
                    height={'250px'}
                    chartType="AreaChart"

                    loader={<div>Loading Chart</div>}
                    data={mapData()}

                    options={{
                        isStacked: true,
                        colors: ['red', 'yellow', 'green'],
                        vAxis: { minValue: 0 },
                        chartArea: {'width': '80%', 'height': '80%'},
                        legend: { position: 'bottom'},
                        focusTarget: 'category'
                    }}
                />
            </Card.Body>
        </Card>
    )
}