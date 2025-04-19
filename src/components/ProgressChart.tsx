
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data, would be replaced with actual user data
const data = [
  { day: 'Monday', mood: 5, anxiety: 7, sleep: 6 },
  { day: 'Tuesday', mood: 6, anxiety: 6, sleep: 7 },
  { day: 'Wednesday', mood: 4, anxiety: 8, sleep: 5 },
  { day: 'Thursday', mood: 7, anxiety: 4, sleep: 8 },
  { day: 'Friday', mood: 8, anxiety: 3, sleep: 8 },
  { day: 'Saturday', mood: 7, anxiety: 5, sleep: 7 },
  { day: 'Sunday', mood: 9, anxiety: 2, sleep: 9 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="mindful-card !p-3">
        <p className="font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const ProgressChart = () => {
  return (
    <div className="mindful-card">
      <h3 className="text-xl font-medium text-mindful-sage mb-6">Weekly Progress</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="mood" 
              name="Mood"
              stroke="#84A59D" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="anxiety" 
              name="Anxiety"
              stroke="#BB8588" 
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="sleep" 
              name="Sleep Quality"
              stroke="#A8DADC" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-around mt-6 text-sm text-foreground/70">
        <div className="text-center">
          <p className="font-medium text-xl text-mindful-sage">7.0</p>
          <p>Avg. Mood</p>
        </div>
        <div className="text-center">
          <p className="font-medium text-xl text-mindful-mauve">5.0</p>
          <p>Avg. Anxiety</p>
        </div>
        <div className="text-center">
          <p className="font-medium text-xl text-mindful-blue">7.1</p>
          <p>Avg. Sleep</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
