

import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './charts.scss'

const data = [
  {name:"January",total:1200},
  {name:"Febuary",total:2100},
  {name:"March",total:2100},
  {name:"April",total:800},
  {name:"May",total:900},
  {name:"June",total:1700},
];

const Charts = () => {
  return (
    <div className='charts' >
    <div className="title">
      Last 6 month revenue
    </div>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  
</AreaChart>
    </div>
  )
}

export default Charts