"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomLineChart = ({ lineChartData }) => (
  <div className='absolute'>
    <div className='relative text-3xl font-bold font-mono mb-3 ml-5'>Line Chart</div>
    <ResponsiveContainer width={600} height={300}>
      <LineChart data={lineChartData} margin={{ top: 10, right: 0, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDashoffset="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* Set the strokeWidth property to change the line thickness */}
        <Line type="monotone" dataKey="value" stroke="#ff0000" strokeWidth={3} activeDot={{ r: 14 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CustomLineChart;
