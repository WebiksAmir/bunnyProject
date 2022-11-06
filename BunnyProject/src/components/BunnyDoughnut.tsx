import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import { dataArrayCuteness } from "../util";
import { bunnyState } from "../store/selectors";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export default function BunnyDoughnut() {
  const myBunnyState = useSelector(bunnyState).bunnies
  const cuteness = dataArrayCuteness(myBunnyState);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "bunny cuteness chart",
      },
    },
  };
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        data: cuteness,
        backgroundColor: [
          "rgba(255, 99, 132, 0.1)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.3)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.9)",
          "rgba(255, 99, 132, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={data} />;

}
