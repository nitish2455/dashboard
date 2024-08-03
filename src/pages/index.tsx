import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <div className="home flex flex-col min-h-screen">
      <Navbar/>
      <div className='flex flex-col justify-center item-center mx-6 mt-12'>
      <h1 className="text-3xl  font-bold underline">Welcome to My Dashboard</h1>
      
        <ul className="space-y-6 py-4 ">
          <li>
            <Link href="/dashboard" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go to Dashboard</Link>
          </li>
          <li> 
            <Link href="/setting" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go to Settings</Link>
          </li>
        </ul>
      

      </div>
      <div className='mt-auto'>
      <Footer/>

      </div>
    </div>
  );
};

export default Home;
