"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ barChartData }) => (
  <div className='relative'>
    <div className='absolute text-2xl font-mono font-bold'>Bar Chart</div>
    <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={barChartData}
      margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#ff0000" />
    </BarChart>
  </ResponsiveContainer>
  </div>
);

export default CustomBarChart;
