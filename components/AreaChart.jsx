"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomAreaChart = ({ data = [] }) => (
  <div className="relative">
    <div className="absolute text-2xl font-bold font-mono  mb-10 ml-5">Area Chart</div>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* Use a single Area component to define the color and type */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="#ff0000"
          strokeWidth={3}
          fill="#8884d8"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default CustomAreaChart;
