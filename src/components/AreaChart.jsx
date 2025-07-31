import {AreaChart, Area, YAxis, LabelList, XAxis,ResponsiveContainer} from 'recharts';

export default function Chart({next18Hours}) {
    
    return (
        <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={next18Hours} >
        <YAxis domain={['dataMin - 3', 'dataMax + 3']}
        tick={{ fill: '#ffffff', fontSize: 12 }} />
        <XAxis 
        dataKey="hour"  
        padding={{ left: 10, right: 10 }}
        tick={{ fill: '#ffffff', fontSize: 12 }}
        />
        <Area
        type="monotone"
        dataKey="temp"
        stroke="#ffffff"
        fill="#ffffff"
        fillOpacity={0.4} 
        label = {{dataKey:"temp" ,position:"top" ,fill:"#ffffff" ,fontSize:12 }} 
        />
        </AreaChart>
        </ResponsiveContainer>
    )
}