import { motion } from 'framer-motion'
import { MessageSquare, Clock, Target, Award, AlertCircle } from 'lucide-react'

export function DebateHistory() {
  const debates = [
    {
      student: 'Alice Johnson',
      topic: 'Error Propagation in Physics',
      duration: '15 min',
      outcome: 'Breakthrough',
      score: 92,
      timestamp: '2 hours ago',
      status: 'completed',
      insights: 'Student improved understanding of squared error effects',
    },
    {
      student: 'Bob Smith',
      topic: 'Force Analysis Methods',
      duration: '12 min',
      outcome: 'Good Progress',
      score: 78,
      timestamp: '4 hours ago',
      status: 'completed',
      insights: 'Needs more practice with vector decomposition',
    },
    {
      student: 'Carol Davis',
      topic: 'Momentum Conservation',
      duration: '8 min',
      outcome: 'In Progress',
      score: null,
      timestamp: 'Currently active',
      status: 'active',
      insights: 'Engaging well with collision scenarios',
    },
    {
      student: 'David Wilson',
      topic: 'Precision vs Accuracy',
      duration: '18 min',
      outcome: 'Needs Support',
      score: 65,
      timestamp: '6 hours ago',
      status: 'needs-help',
      insights: 'Struggling with systematic vs random errors',
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Award className="h-4 w-4 text-green-500" />
      case 'active':
        return <Clock className="h-4 w-4 text-blue-500" />
      case 'needs-help':
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      default:
        return <MessageSquare className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200'
      case 'active':
        return 'bg-blue-50 border-blue-200'
      case 'needs-help':
        return 'bg-orange-50 border-orange-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  const getOutcomeColor = (outcome: string) => {
    if (outcome.includes('Breakthrough')) return 'text-green-600 bg-green-100'
    if (outcome.includes('Good')) return 'text-blue-600 bg-blue-100'
    if (outcome.includes('Progress')) return 'text-blue-600 bg-blue-100'
    if (outcome.includes('Support')) return 'text-orange-600 bg-orange-100'
    return 'text-gray-600 bg-gray-100'
  }

  return (
    <div className="space-y-4">
      {debates.map((debate, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`p-4 rounded-lg border-2 ${getStatusColor(debate.status)} transition-all duration-200 hover:shadow-md`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              {getStatusIcon(debate.status)}
              <div>
                <p className="font-medium text-gray-900">{debate.student}</p>
                <p className="text-sm text-gray-600">{debate.topic}</p>
              </div>
            </div>
            <div className="text-right">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getOutcomeColor(debate.outcome)}`}>
                {debate.outcome}
              </span>
              {debate.score && (
                <p className="text-sm font-semibold text-gray-900 mt-1">{debate.score}%</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{debate.duration}</span>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">{debate.timestamp}</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-gray-100">
            <div className="flex items-start space-x-2">
              <Target className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-purple-600 mb-1">Learning Insights</p>
                <p className="text-sm text-gray-700">{debate.insights}</p>
              </div>
            </div>
          </div>

          {debate.status === 'active' && (
            <div className="mt-3 flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-600 font-medium">Active Session</span>
            </div>
          )}
        </motion.div>
      ))}

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-gray-800 mb-2">Debate Summary</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Debates Today</p>
            <p className="text-xl font-bold text-purple-600">24</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Avg. Duration</p>
            <p className="text-xl font-bold text-blue-600">13 min</p>
          </div>
        </div>
      </div>
    </div>
  )
}