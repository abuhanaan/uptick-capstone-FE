'use client';

import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

const PieChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const pieChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(pieChartRef, {
            type: 'pie',
            data: {
                labels: ['120 < 1 year', '150 < 3 years', '100 3+ years'],
                datasets: [
                    {
                        // label: 'My First Dataset',
                        data: [120, 150, 100],
                        backgroundColor: [
                            '#0E1933',
                            '#2B4A99',
                            '#A3BDFF'
                        ],
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
                    title: {
                        display: true,
                        text: 'Experience',
                        align: 'start',
                        font: {
                            size: 18
                        }
                    },
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
        <div className='relative w-[400px] h-[400px] self-center'>
            <canvas ref={chartRef} />
        </div>
    )
}

export default PieChart;