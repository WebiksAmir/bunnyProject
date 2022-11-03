import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { dataArrayCuteness } from "../util";
import { useAppSelector } from "../store/hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BunnyDoughnut() {
  const bunnyArray = useAppSelector((state) => state.bunny.bunnies);
  const cuteness = dataArrayCuteness(bunnyArray);
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "# of Votes",
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

  return (
    <>
      <h2>bunny cuteness chart</h2>
      <Pie data={data} />
    </>
  );
}
