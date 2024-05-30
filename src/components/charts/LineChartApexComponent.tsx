import React from 'react'
import ReactApexChart from 'react-apexcharts';

const myData = {
          
  series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }, {
    name: "Desktops",
    data: [11, 21, 45, 61, 19, 12, 39, 41, 108]
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    colors: ['#05a199', '#32474c'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  },
};

const LineChartApexComponent = () => {
  return (
    <div id="chart">
      <ReactApexChart options={myData.options} series={myData.series} type="line" height={450} />
    </div>
  );
}

export default LineChartApexComponent