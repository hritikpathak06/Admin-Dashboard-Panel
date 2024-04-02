import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { BarChartProps, DoughnutChartProps } from "../@types/barChartTypes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

export const BarChart = ({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  labels = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        // position: "top" as const,
        display: true,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  legends = true,
  cutout,
  offset,
}: DoughnutChartProps) => {
  const doughtnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughtnutData} options={doughnutOptions} />;
};
