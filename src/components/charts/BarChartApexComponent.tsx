import React from 'react';
import Chart from "react-apexcharts";

const myData = {
    options: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            fontFamily: "inherit",
          },
          fontFamily: 'Montserrat',
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          dataLabels: {
            formatter: (val) => {
              return val / 1000 + 'K'
            },
          },
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          xaxis: {
            categories: [
              'Online advertising',
              'Sales Training',
              'Print advertising',
              'Catalogs',
              'Meetings',
              'Public relations'
            ]
          },
          fill: {
            opacity: 1
          },
          colors: ['#32474c', '#32474c', '#05a199', '#05a199'],
          yaxis: {
            labels: {
              formatter: (val) => {
                return val / 1000 + 'K'
              }
            }
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left'
          }
    },
    series: [
        {
          name: 'Q1 Budget',
          group: 'budget',
          data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
          name: 'Q1 Actual',
          group: 'actual',
          data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
          name: 'Q2 Budget',
          group: 'budget',
          data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
          name: 'Q2 Actual',
          group: 'actual',
          data: [20000, 40000, 25000, 10000, 12000, 28000]
        }
      ]
  };

const BarChartApexComponent = () => {
    return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={myData.options}
                series={myData.series}
                type="bar"
                height="450"
              />
            </div>
          </div>
        </div>
      );
}

export default BarChartApexComponent