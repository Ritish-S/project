import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Users, 
  Brain, 
  TrendingUp, 
  Clock, 
  Target,
  MessageSquare,
  Award,
  Calendar,
  Filter,
  Download,
  Settings
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { AnalyticsChart } from './dashboard/AnalyticsChart'
import { StudentProgress } from './dashboard/StudentProgress'
import { DebateHistory } from './dashboard/DebateHistory'
import { PerformanceMetrics } from './dashboard/PerformanceMetrics'
import { formatNumber } from '@/lib/utils'

export function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d')
  const [selectedMetric, setSelectedMetric] = useState('engagement')

  const timeRanges = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
  ]

  const metrics = [
    { value: 'engagement', label: 'Engagement Rate' },
    { value: 'learning', label: 'Learning Progress' },
    { value: 'debates', label: 'Debate Quality' },
    { value: 'comprehension', label: 'Comprehension' },
  ]

  const overviewStats = [
    {
      title: 'Active Students',
      value: '2,847',
      change: '+12.3%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Debates Conducted',
      value: '18,492',
      change: '+8.7%',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Avg. Engagement',
      value: '87.5%',
      change: '+5.2%',
      trend: 'up',
      icon: Brain,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Learning Gains',
      value: '94.2%',
      change: '+15.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
        >
          <div>
            <h1 className="text-4xl font-bold font-heading bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Analytics Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Real-time insights into student engagement and learning outcomes
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                        <p className={`text-sm font-medium ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change} from last period
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Analytics Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span>Learning Analytics</span>
                  </CardTitle>
                  <select
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded text-sm"
                  >
                    {metrics.map((metric) => (
                      <option key={metric.value} value={metric.value}>
                        {metric.label}
                      </option>
                    ))}
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <AnalyticsChart timeRange={selectedTimeRange} metric={selectedMetric} />
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PerformanceMetrics />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Student Progress and Debate History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>Student Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StudentProgress />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-orange-600" />
                  <span>Recent Debates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DebateHistory />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    time: '2 minutes ago',
                    student: 'Alice Johnson',
                    activity: 'Completed debate on Error Propagation',
                    score: 92,
                    type: 'debate'
                  },
                  {
                    time: '5 minutes ago',
                    student: 'Bob Smith',
                    activity: 'Started new topic: Force Analysis',
                    score: null,
                    type: 'start'
                  },
                  {
                    time: '12 minutes ago',
                    student: 'Carol Davis',
                    activity: 'Achieved breakthrough in Momentum concepts',
                    score: 88,
                    type: 'breakthrough'
                  },
                  {
                    time: '18 minutes ago',
                    student: 'David Wilson',
                    activity: 'Requested help with Precision vs Accuracy',
                    score: null,
                    type: 'help'
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'debate' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'start' ? 'bg-green-100 text-green-600' :
                      activity.type === 'breakthrough' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {activity.type === 'debate' ? <MessageSquare className="h-4 w-4" /> :
                       activity.type === 'start' ? <Target className="h-4 w-4" /> :
                       activity.type === 'breakthrough' ? <Award className="h-4 w-4" /> :
                       <Brain className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.student}</p>
                      <p className="text-sm text-gray-600">{activity.activity}</p>
                    </div>
                    {activity.score && (
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{activity.score}%</p>
                        <p className="text-xs text-gray-500">Score</p>
                      </div>
                    )}
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}