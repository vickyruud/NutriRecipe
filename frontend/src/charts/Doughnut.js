import React from "react";
import { Doughnut } from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend);


export default function DoughnutChart(props) {

  const data = {
    labels: ["Carbohydrate", "Protein", "Sugar", "Fat", "Fiber"],
    datasets: [{
      label: "Nutrients", 
      data: [105, 25, 69, 65, 20],
      backgroundColor: ["purple", "skyblue", "pink","grey", "lightgreen"]
    }]
  }

  return (
    <div >
      <div style={{height: "500px", width:"500px", margin: "0 auto"}}>
      <Doughnut data={data} />
      </div>
    </div>
  )
}

