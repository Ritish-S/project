import { motion } from 'framer-motion'
import { User, TrendingUp, TrendingDown } from 'lucide-react'

export function StudentProgress() {
  const students = [
    {
      name: 'Alice Johnson',
      avatar: 'AJ',
      progress: 92,
      change: +8,
      status: 'Excellent',
      topic: 'Error Analysis',
      color: 'bg-green-500',
    },
    {
      name: 'Bob Smith',
      avatar: 'BS',
      progress: 78,
      change: +12,
      status: 'Good',
      topic: 'Force Dynamics',
      color: 'bg-blue-500',
    },
    {
      name: 'Carol Davis',
      avatar: 'CD',
      progress: 85,
      change: -3,
      status: 'Good',
      topic: 'Momentum',
      color: 'bg-purple-500',
    },
    {
      name: 'David Wilson',
      avatar: 'DW',
      progress: 67,
      change: +15,
      status: 'Improving',
      topic: 'Precision',
      color: 'bg-orange-500',
    },
    {
      name: 'Emma Brown',
      avatar: 'EB',
      progress: 95,
      change: +5,
      status: 'Outstanding',
      topic: 'Thermodynamics',
      color: 'bg-pink-500',
    },
  ]

  return (
    <div className="space-y-4">
      {students.map((student, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full ${student.color} flex items-center justify-center text-white font-semibold text-sm`}>
                {student.avatar}
              </div>
              <div>
                <p className="font-medium text-gray-900">{student.name}</p>
                <p className="text-sm text-gray-500">{student.topic}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {student.change >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ${
                student.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {student.change >= 0 ? '+' : ''}{student.change}%
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-semibold text-gray-900">{student.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${student.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${student.progress}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-xs px-2 py-1 rounded-full ${
                student.status === 'Outstanding' || student.status === 'Excellent' 
                  ? 'bg-green-100 text-green-800'
                  : student.status === 'Good'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {student.status}
              </span>
              <span className="text-xs text-gray-500">Last updated: 2h ago</span>
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-800">Class Average</p>
            <p className="text-2xl font-bold text-blue-600">83.4%</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Improvement Rate</p>
            <p className="text-lg font-semibold text-green-600">+7.2%</p>
          </div>
        </div>
      </div>
    </div>
  )
}