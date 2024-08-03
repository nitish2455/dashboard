import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';


const LineChart = dynamic(() => import('../components/lineChart'), { ssr: false });
const BarChart = dynamic(() => import('../components/Barchart'), { ssr: false });
const DataTable = dynamic(() => import('../components/Datatable'), { ssr: false });

const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then((response) => response.json())
      .then((data) => {
        setLineChartData(data.lineChartData);
        setBarChartData(data.barChartData);
        setTableData(data.tableData);
      });
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
     <Navbar/>
     <h1 className="text-3xl  font-bold underline">Dashboard Showing Chart of Line Bar and Data table</h1>
    <div className="dashboard">
      <div className="widget">
        <LineChart data={lineChartData} />
      </div>
      <div className="widget">
        <BarChart data={barChartData} />
      </div>
      <div className="widget">
        <DataTable data={tableData} />
      </div>
    </div>
    <div className='mt-auto'>

    <Footer/>
    </div>
    </div>
  );
};

export default Dashboard;
