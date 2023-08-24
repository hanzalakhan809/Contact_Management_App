import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import chartServices from '../services/chartServices';
import { useEffect, useState } from 'react';




export default function LineChartComponent() {
  
  const [data,setData]= useState([]);
  const topData = [...data].sort((a, b) => b.cases - a.cases).slice(0, 10);
  
  useEffect(() => {
chartServices.getCountrySpecificData().then((response)=>[
setData(response)
])
  }, [])

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={topData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
        <XAxis dataKey="country" angle={-45} textAnchor="end" interval={0} height={60} />
        <YAxis
          type="number"
          domain={[0, 6000]}
          ticks={[0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000]}
        />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Line type="monotone" dataKey="oneDeathPerPeople" stroke="#FF5733" dot={false} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="oneCasePerPeople" stroke="#33FF57" dot={false} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="deathsPerOneMillion" stroke="#3357FF" dot={false} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="oneTestPerPeople" stroke="#FF33F6" dot={false} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>


  )
}
