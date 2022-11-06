import React from "react";
import { bunnyState, duckState } from "../store/selectors";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DucksVsBunnies() {
  const myBunnyState = useSelector(bunnyState).bunnies;
  const myDuckState = useSelector(duckState).ducks;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Ducks VS. Bunnies",
      },
    },
  };
  const labels = ["Total"];
  const data = {
    labels,
    datasets: [
      {
        label: "ducks",
        data: labels.map(() => myDuckState.length),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "bunnies",
        data: labels.map(() => myBunnyState.length),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
