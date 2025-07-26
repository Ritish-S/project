import { motion } from 'framer-motion'
import { Target, User, Bot, MessageCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'

export function ExampleSlide() {
  const conversation = [
    {
      type: 'topic',
      content: 'Error Propagation in Physics',
      icon: Target,
    },
    {
      type: 'student',
      content: "I think measurement error doesn't affect final result much.",
      icon: User,
    },
    {
      type: 'tool',
      content: "Then how would small errors in velocity affect kinetic energy calculations?",
      icon: Bot,
    },
    {
      type: 'result',
      content: 'Forces student to rethink and re-express clearly',
      icon: Target,
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-6"
        >
          <Target className="h-16 w-16 mx-auto text-blue-600" />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Example Use Case
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          See how the tool challenges misconceptions in real-time
        </p>
      </motion.div>

      {/* Conversation Flow */}
      <div className="max-w-4xl mx-auto space-y-8">
        {conversation.map((message, index) => {
          const Icon = message.icon
          
          if (message.type === 'topic') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center space-x-3">
                      <Icon className="h-8 w-8" />
                      <h2 className="text-2xl font-bold">Topic: {message.content}</h2>
                      <Icon className="h-8 w-8" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          }

          if (message.type === 'student') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-blue-600">Student:</span>
                    </div>
                    <p className="text-gray-700 text-lg italic">"{message.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          }

          if (message.type === 'tool') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start space-x-4 flex-row-reverse"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-2 justify-end">
                      <span className="font-semibold text-purple-600">InteractiveLearn AI:</span>
                    </div>
                    <p className="text-gray-700 text-lg italic text-right">"{message.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          }

          if (message.type === 'result') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <Icon className="h-8 w-8 text-green-600" />
                      <h3 className="text-xl font-bold text-green-700">🎯 Learning Outcome</h3>
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-lg text-green-700 font-semibold">{message.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          }

          return null
        })}
      </div>

      {/* Thinking Process Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="max-w-5xl mx-auto"
      >
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Thinking Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <MessageCircle className="h-12 w-12 mx-auto text-orange-500" />
                </motion.div>
                <h4 className="font-semibold text-gray-800 mb-2">Initial Misconception</h4>
                <p className="text-gray-600 text-sm">Student believes errors are negligible</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-4"
                >
                  <ArrowRight className="h-12 w-12 mx-auto text-purple-500" />
                </motion.div>
                <h4 className="font-semibold text-gray-800 mb-2">Challenge Question</h4>
                <p className="text-gray-600 text-sm">AI probes with specific physics example</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <Target className="h-12 w-12 mx-auto text-green-500" />
                </motion.div>
                <h4 className="font-semibold text-gray-800 mb-2">Deeper Understanding</h4>
                <p className="text-gray-600 text-sm">Student forced to reconsider and elaborate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Real Application */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why This Works</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The student's casual dismissal of measurement error reveals a fundamental misunderstanding 
            of error propagation in physics calculations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By challenging with a specific example (kinetic energy = ½mv²), the AI forces the student 
            to confront how velocity errors are squared, dramatically amplifying their impact.
          </p>
        </div>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"
        />
      </div>
    </div>
  )
}