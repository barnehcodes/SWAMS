import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import '../css/styles.css';

Chart.register(...registerables);

const Charts = () => {
  const waterChartRef = useRef(null);
  const historicalChartRef = useRef(null);

  useEffect(() => {
    const ctxWater = waterChartRef.current.getContext('2d');
    const waterChart = new Chart(ctxWater, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Water Consumption (m³)',
          data: [500, 600, 550, 700, 650, 600],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: true,
        }],
      },
      options: { responsive: true },
    });

    const ctxHistorical = historicalChartRef.current.getContext('2d');
    const historicalChart = new Chart(ctxHistorical, {
      type: 'bar',
      data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'Annual Consumption (m³)',
          data: [7000, 6800, 7200, 7100, 7300, 7500],
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
          borderColor: 'rgba(255, 206, 86, 1)',
          fill: true,
        }],
      },
      options: { responsive: true },
    });

    return () => {
      waterChart.destroy();
      historicalChart.destroy();
    };
  }, []);

  return (
    <div>
      <div id="waterChart" className="chart-container">
        <canvas id="waterConsumptionChart" ref={waterChartRef}></canvas>
      </div>
      <div id="historicalChart" className="chart-container">
        <canvas id="historicalDataChart" ref={historicalChartRef}></canvas>
      </div>
    </div>
  );
};

export default Charts;