"use client"

import React from 'react';
import "@/app/globals.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: 'rgba(255, 150, 112, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const BarChartJSComponent = () => {
  return (
    <Bar options={options} data={data} redraw={true}/>
  )
}

export default BarChartJSComponent