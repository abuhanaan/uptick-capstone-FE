'use client';

import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

const PieChart = ({ chartData }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const {labels, data, bgColor} = chartData;

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const pieChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(pieChartRef, {
            type: 'pie',
            data: {
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: [...bgColor],
                        hoverOffset: 4
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: {
                                size: 18
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Experience',
                    //     align: 'start',
                    //     padding: '5px',
                    //     font: {
                    //         size: 18
                    //     }
                    // },
                },
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    }, []);

    return (
        <div className='relative w-[330px] h-[300px] rounded-lg bg-white pt-2 px-4 self-center'>
            <h2 className='text-lg font-bold -mb-12'>Experience</h2>
            <canvas ref={chartRef} className='' />
        </div>
    )
}

export default PieChart;