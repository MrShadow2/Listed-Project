import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js'
Chart.register(ArcElement)

const data = {
    labels: ['green', 'red', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [55, 31, 14],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: false,
    width: 400,
    height: 400,
  };
  
  const MyChart = () => (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
  
  export default MyChart;