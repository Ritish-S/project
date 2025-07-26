import { motion } from 'framer-motion'
import { User, MessageSquare, Search, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'

export function HowItWorksSlide() {
  const steps = [
    {
      number: 1,
      icon: User,
      title: 'Students Explain',
      description: 'Students share their understanding of a concept',
      detail: 'The learning begins when students articulate their current knowledge',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      icon: MessageSquare,
      title: 'Tool Pushes Back',
      description: 'AI responds with challenging questions and counterarguments',
      detail: 'Smart algorithms identify weaknesses and probe deeper',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: 3,
      icon: Search,
      title: 'Reveals Gaps',
      description: 'Exposes misconceptions and knowledge gaps',
      detail: 'The process uncovers areas that need reinforcement',
      color: 'from-green-500 to-green-600',
    },
    {
      number: 4,
      icon: Lightbulb,
      title: 'Deepens Understanding',
      description: 'Students develop stronger, more nuanced comprehension',
      detail: 'True learning happens through intellectual challenge',
      color: 'from-orange-500 to-orange-600',
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
        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          How It Works
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A four-step process that transforms learning through intelligent debate
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className="h-12 w-12 mx-auto text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      {step.detail}
                    </p>
                  </CardContent>
                </Card>

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Process Flow Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Learning Cycle</h2>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <span className="px-4 py-2 bg-white rounded-lg shadow text-blue-600 font-semibold">Explain</span>
            <span className="text-gray-400">→</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow text-purple-600 font-semibold">Challenge</span>
            <span className="text-gray-400">→</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow text-green-600 font-semibold">Discover</span>
            <span className="text-gray-400">→</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow text-orange-600 font-semibold">Master</span>
          </div>
        </div>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"
        />
      </div>
    </div>
  )
}