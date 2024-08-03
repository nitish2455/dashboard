import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ data }:any) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return <Line data={data} />;
};

export default LineChart;
