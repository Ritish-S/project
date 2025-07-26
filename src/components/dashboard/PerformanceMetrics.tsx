import { motion } from 'framer-motion'

export function PerformanceMetrics() {
  const metrics = [
    {
      label: 'Critical Thinking',
      value: 87,
      color: 'stroke-blue-500',
      bgColor: 'stroke-blue-100',
    },
    {
      label: 'Debate Quality',
      value: 92,
      color: 'stroke-purple-500',
      bgColor: 'stroke-purple-100',
    },
    {
      label: 'Comprehension',
      value: 78,
      color: 'stroke-green-500',
      bgColor: 'stroke-green-100',
    },
    {
      label: 'Engagement',
      value: 94,
      color: 'stroke-orange-500',
      bgColor: 'stroke-orange-100',
    },
  ]

  const CircularProgress = ({ value, color, bgColor }: { value: number; color: string; bgColor: string }) => {
    const circumference = 2 * Math.PI * 40
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (value / 100) * circumference

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            fill="none"
            className={bgColor}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            fill="none"
            className={color}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-700">{value}%</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center space-x-4"
        >
          <CircularProgress 
            value={metric.value} 
            color={metric.color} 
            bgColor={metric.bgColor}
          />
          <div className="flex-1">
            <p className="font-medium text-gray-800">{metric.label}</p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${metric.color.replace('stroke', 'bg')}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              </div>
              <span className="text-sm text-gray-500 min-w-max">{metric.value}%</span>
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200/50">
        <h4 className="font-semibold text-gray-800 mb-2">Performance Insights</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Engagement levels are exceptionally high</li>
          <li>• Debate quality shows consistent improvement</li>
          <li>• Critical thinking skills developing well</li>
          <li>• Comprehension needs focus in certain areas</li>
        </ul>
      </div>
    </div>
  )
}