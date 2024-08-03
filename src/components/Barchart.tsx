import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ data }:any) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return <Bar data={data} />;
};

export default BarChart;
