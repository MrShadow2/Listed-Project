import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Week 1', uv: 100, pv: 200 },
  { name: 'Week 2', uv: 400, pv: 325},
  { name: 'Week 3', uv: 122, pv: 241},
  { name: 'Week 4', uv: 232, pv: 242}
];

const Graph = () => {
  return (
<div style={{ maxWidth: '85vw', display: 'flex', justifyContent: 'center', overflow:'hidden' }}>
    <LineChart width={880} height={200} data={data} >
      
      <XAxis dataKey="name" />
      <YAxis
  type="number"
  domain={[0, 500]}
  ticks={[0, 100, 200, 300, 400, 500]}
/>

      <CartesianGrid stroke="#eee" horizontal={true} />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
};

export default Graph;
