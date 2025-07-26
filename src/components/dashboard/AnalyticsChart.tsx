import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

interface AnalyticsChartProps {
  timeRange: string
  metric: string
}

export function AnalyticsChart({ timeRange, metric }: AnalyticsChartProps) {
  // Mock data based on time range and metric
  const generateData = () => {
    const baseData = [
      { name: 'Mon', engagement: 65, learning: 72, debates: 58, comprehension: 68 },
      { name: 'Tue', engagement: 72, learning: 78, debates: 65, comprehension: 74 },
      { name: 'Wed', engagement: 68, learning: 75, debates: 71, comprehension: 71 },
      { name: 'Thu', engagement: 75, learning: 82, debates: 68, comprehension: 78 },
      { name: 'Fri', engagement: 82, learning: 85, debates: 74, comprehension: 81 },
      { name: 'Sat', engagement: 78, learning: 80, debates: 72, comprehension: 77 },
      { name: 'Sun', engagement: 85, learning: 88, debates: 79, comprehension: 84 },
    ]

    if (timeRange === '24h') {
      return [
        { name: '00:00', engagement: 45, learning: 52, debates: 38, comprehension: 48 },
        { name: '04:00', engagement: 32, learning: 35, debates: 28, comprehension: 31 },
        { name: '08:00', engagement: 68, learning: 72, debates: 65, comprehension: 69 },
        { name: '12:00', engagement: 85, learning: 88, debates: 82, comprehension: 86 },
        { name: '16:00', engagement: 92, learning: 89, debates: 88, comprehension: 91 },
        { name: '20:00', engagement: 76, learning: 79, debates: 73, comprehension: 77 },
      ]
    }

    if (timeRange === '30d') {
      return [
        { name: 'Week 1', engagement: 68, learning: 72, debates: 65, comprehension: 69 },
        { name: 'Week 2', engagement: 74, learning: 78, debates: 71, comprehension: 75 },
        { name: 'Week 3', engagement: 79, learning: 82, debates: 76, comprehension: 80 },
        { name: 'Week 4', engagement: 85, learning: 88, debates: 82, comprehension: 86 },
      ]
    }

    return baseData
  }

  const data = generateData()
  
  const getColor = () => {
    switch (metric) {
      case 'engagement': return '#3B82F6'
      case 'learning': return '#8B5CF6'
      case 'debates': return '#10B981'
      case 'comprehension': return '#F59E0B'
      default: return '#3B82F6'
    }
  }

  const getGradientColor = () => {
    switch (metric) {
      case 'engagement': return 'url(#blueGradient)'
      case 'learning': return 'url(#purpleGradient)'
      case 'debates': return 'url(#greenGradient)'
      case 'comprehension': return 'url(#orangeGradient)'
      default: return 'url(#blueGradient)'
    }
  }

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="name" 
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey={metric}
            stroke={getColor()}
            strokeWidth={3}
            fill={getGradientColor()}
            dot={{ fill: getColor(), strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: getColor(), strokeWidth: 2, fill: 'white' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}