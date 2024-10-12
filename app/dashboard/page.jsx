"use client";
import Card from "@/components/Card";
import CustomBarChart from "@/components/CustomBarChart";
import CustomPieChart from "@/components/CustomPieChart";
import LeftSideBar from "@/components/LeftSideBar";
import CustomLineChart from "@/components/LineChart";
import DashboardData from "@/context/DashboardData";
import { useState } from "react";
import { FaCompressArrowsAlt } from "react-icons/fa";
import ProtectedRoute from "@/components/Protectedrouts";
import SimpleAreaChart from "@/components/AreaChart";
import TopBar from "@/components/TopBar";



const Dashboard = () => {
  
  
  const data = DashboardData();

 

  // Calculate totals for A, B, C, D
  const totalA = data.reduce((acc, item) => acc + item.A, 0);
  const totalB = data.reduce((acc, item) => acc + item.B, 0);
  const totalC = data.reduce((acc, item) => acc + item.C, 0);
  const totalD = data.reduce((acc, item) => acc + item.D, 0);

  // Prepare data for the pie chart
  const pieChartData = [
    { name: 'A', value: totalA },
    { name: 'B', value: totalB },
    { name: 'C', value: totalC },
    { name: 'D', value: totalD },
  ];

  return (
    <ProtectedRoute >
    <div className="bg-neutral-800 ">


      <div className="flex flex-col md:flex-row">

        <div className=" flex flex-wrap ">
         
          
            <div className="md:ml-5  max-lg:flex-col">
              <LeftSideBar />
              <TopBar />
            </div>
          
        </div>

        <div>

         

          <div className="mt-10  md:ml-8 md:mt-4  flex justify-center flex-wrap md:justify-start items-center  ">
            <div className="flex  justify-center items-center md:flex-row flex-col gap-y-6 md:gap-y-0 md:gap-x-10">{pieChartData.map((item, index) => (
              <Card key={index} value={item.name} title={item.value} />
            ))}
            </div>
          </div>

          <div className="pb-64 mt-20 m-4 flex flex-wrap justify-center md:justify-start items-center md:gap-x-16 gap-y-8">
            <div className="md:ml-4 md:w-[640px] w-[380px] h-[250px] md:h-[350px] py-6 rounded-lg shadow text-red-700 bg-neutral-900 border border-white">
              <CustomLineChart lineChartData={pieChartData} /> 
            </div>

            <div className="text-red-700 w-[350px] h-[350px] bg-neutral-900 p-4 rounded-lg shadow border border-white">
              <CustomPieChart pieChartData={pieChartData} /> 
            </div>
            
            <div className="md:ml-4 w-[430px] h-[350px] py-6 rounded-lg shadow text-red-700 bg-neutral-900 border border-white">
              <SimpleAreaChart data={pieChartData} /> 
            </div>


            <div className="md:ml-4 text-red-500 w-[550px] h-[350px] bg-neutral-900 p-4 rounded-lg shadow border border-white">
              <CustomBarChart barChartData={pieChartData} /> 
            </div> 

          </div>
          
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
