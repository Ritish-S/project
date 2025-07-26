import { motion } from 'framer-motion'
import { CheckCircle, MessageSquare, Users, BookOpen, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'

export function SummarySlide() {
  const summaryPoints = [
    {
      icon: MessageSquare,
      title: 'Goes beyond passive learning',
      description: 'Creates an active, engaging educational experience',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Mimics a smart debate partner',
      description: 'Provides intellectual opposition to strengthen reasoning',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Masters complex concepts through discussion',
      description: 'Helps students achieve deep understanding via dialogue',
      color: 'from-green-500 to-green-600',
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
          Summary
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          This revolutionary tool transforms education through intelligent debate
        </p>
      </motion.div>

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">This Tool:</h2>
        </div>
      </motion.div>

      {/* Summary Points */}
      <div className="max-w-5xl mx-auto space-y-6">
        {summaryPoints.map((point, index) => {
          const Icon = point.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </motion.div>
                    <div className="flex-shrink-0">
                      <div className={`p-6 rounded-full bg-gradient-to-br ${point.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Vision Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200/50 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Future of Learning</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We believe education should challenge, not comfort. Students grow strongest when they must 
            defend their ideas, question their assumptions, and rebuild their understanding from the ground up.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            This is not just another EdTech tool—it's a paradigm shift toward intellectual courage and authentic learning.
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="text-center space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-800">Ready to Transform Learning?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="gradient"
            size="lg"
            className="text-lg px-8 py-4 shadow-2xl animate-pulse-glow"
          >
            Start Your Learning Journey
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4"
          >
            Explore the Dashboard
          </Button>
        </div>
      </motion.div>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-3xl mx-auto border border-blue-200/50">
          <p className="text-lg font-semibold text-gray-700">
            "The best learning happens when we're intellectually uncomfortable."
          </p>
          <p className="text-sm text-gray-500 mt-2">— InteractiveLearn Philosophy</p>
        </div>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>
    </div>
  )
}