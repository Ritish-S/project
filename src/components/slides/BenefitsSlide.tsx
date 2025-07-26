import { motion } from 'framer-motion'
import { CheckCircle, Brain, Shield, Eye, Target } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'

export function BenefitsSlide() {
  const benefits = [
    {
      icon: Brain,
      title: 'Encourages critical thinking',
      description: 'Students learn to question, analyze, and evaluate information systematically',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Builds confidence through challenge',
      description: 'Facing intellectual opposition strengthens self-assurance and resilience',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Eye,
      title: 'Uncovers and addresses misconceptions',
      description: 'Identifies hidden flaws in understanding that traditional methods miss',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'Deepens understanding through reasoning',
      description: 'Forces students to articulate and defend their knowledge comprehensively',
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
          Key Benefits
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transform your learning experience with these powerful outcomes
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <Card className="h-full group cursor-pointer overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Icon className="w-full h-full" />
                  </div>

                  <div className="relative z-10">
                    {/* Checkmark and Icon */}
                    <div className="flex items-center space-x-4 mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </motion.div>
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Progress Bar Animation */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      className={`h-1 bg-gradient-to-r ${benefit.color} rounded-full mt-6`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Impact Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Learning Revolution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-4xl font-bold text-blue-600 mb-2"
              >
                85%
              </motion.div>
              <p className="text-gray-600">Improved Critical Thinking</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-4xl font-bold text-purple-600 mb-2"
              >
                92%
              </motion.div>
              <p className="text-gray-600">Increased Confidence</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-4xl font-bold text-green-600 mb-2"
              >
                78%
              </motion.div>
              <p className="text-gray-600">Better Knowledge Retention</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Target className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-800">Ready to Transform Learning?</h3>
            <Target className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Experience the power of intellectual challenge and watch your understanding deepen like never before.
          </p>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
            className={`absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 12)}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}