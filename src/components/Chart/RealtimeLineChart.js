import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const RealtimeLineChart = function ({apiData}) {

    useEffect(() => {
        console.log(apiData);
        initChart();
        setInterval(() => {
            fetch(apiData)
                .then(response => response.json())
                .then(json => {
                    console.log(JSON.stringify(json));
                    ApexCharts.exec('realtime', 'updateSeries', [{
                        data: json
                    }])
                })
                .catch(error => console.log('Error fetching data:', error));
        }, 5000);
    }, []);


    const initChart = function() {
        var options = {
            series: [{
                data: [
                    {
                        x: new Date().getTime(),
                        y: 10
                    },
                    {
                        x: new Date().getTime() + 1000,
                        y: 20
                    }
                ]
            }],
            chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000
                    }
                },
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#000000'],
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Dynamic Updating Chart',
                align: 'center'
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
                range: 60 * 1000,
            },
            yaxis: {
                max: 200
            },
            legend: {
                show: false
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart--line--realtime"), options);
        chart.render();
    }
    return <div id="chart--line--realtime"></div>;
};

export default RealtimeLineChart;