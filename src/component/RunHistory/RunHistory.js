import React from "react";
import Chart from "react-google-charts";

export default (props) => {
    const data = [
        ['run', 'errors', 'skipped', 'succeeded'],
        ...props.runs.map((run, index) => {
                return [run.id, run.errors, run.skipped, run.succeeded]
        })
    ];

    const renderChart = () => {
        if(data.length > 1) {
            return (
                <Chart
                    width={'200px'}
                    height={'50px'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        isStacked: true,
                        height: 50,
                        legend: {position: 'none'},
                        colors: ['red', 'yellow', 'green'],
                        vAxis: { minValue: 0 },
                        hAxis: { textPosition: 'none' },
                        chartArea: {'width': '80%', 'height': '90%'},
                        tooltip: {trigger: 'none'}
                    }}
                />
            )
        } else {
            return (
                <div style={{height: '50px', width: '180px'}}>No run data available</div>
            )
        }
    }

    return (
        <span className={'float-right'}>
            {renderChart()}
        </span>

    )
}