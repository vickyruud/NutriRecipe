import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend);


export default function DoughnutChart(props) {

  const data = {
    labels: ["Carbohydrate", "Protein", "Sugar", "Fat", "Fiber"],
    datasets: [{
      label: "Nutrients", 
      data: props.data,
      backgroundColor: ["purple", "skyblue", "pink","grey", "lightgreen"]
    }]
  }

  const options = {
    plugins: {
      datalabels: {
        display: true,
        align: 'bottom',
        backgroundColor: '#ccc',
        borderRadius: 3,
        font: {
          size: 18,
        }
      },
    }
  }

  return (
    <div >
      <div style={{height: "500px", width:"500px", margin: "0 auto"}}>
      <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />
      </div>
    </div>
  )
}

