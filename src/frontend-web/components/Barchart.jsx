import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Barchart(props){

    const {data} = props;

    return (
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Online" fill="#0095FF" radius={[5,5,0,0]}/>
          <Bar dataKey="Offline" fill="#00E096" radius={[5,5,0,0]}/>
        </BarChart>
    );
}