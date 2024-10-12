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



const Dashboard = () => {
  
  const [side, setSide] = useState(true);
  const data = DashboardData();

  const sidebarHandle = () => {
    setSide(!side);
  };

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
      <div className="flex">

        <div className=" absolute flex  flex-wrap ">
         
          {side && (
            <div className="ml-5">
              <LeftSideBar />
            </div>
          )}
        </div>

        <div className={`ml-[300px]`}>

         

          <div className="mt-4 m-4  flex flex-wrap justify-start items-center  gap-x-10">
            {pieChartData.map((item, index) => (
              <Card key={index} value={item.name} title={item.value} />
            ))}
          </div>

          <div className="mt-20 m-4 flex flex-wrap justify-start items-center gap-x-16 gap-y-8">
            <div className="md:ml-4 w-[640px] h-[350px] py-6 rounded-lg shadow text-red-700 bg-neutral-900 border border-white">
              <CustomLineChart lineChartData={pieChartData} /> {/* Pass data to line chart */}
            </div>

            <div className="text-red-700 w-[350px] h-[350px] bg-neutral-900 p-4 rounded-lg shadow border border-white">
              <CustomPieChart pieChartData={pieChartData} /> {/* Pass data to pie chart */}
            </div>
            
            <div className="md:ml-4 w-[340px] h-[350px] py-6 rounded-lg shadow text-red-700 bg-neutral-900 border border-white">
              <SimpleAreaChart data={pieChartData} /> {/* Pass data to line chart */}
            </div>


            <div className="md:ml-4 text-red-500 w-[550px] h-[350px] bg-neutral-900 p-4 rounded-lg shadow border border-white">
              <CustomBarChart barChartData={pieChartData} /> {/* Pass data to bar chart */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
