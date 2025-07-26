import { motion } from 'framer-motion'
import { MessageCircle, Brain, BookOpen, Target } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'

export function WhatIsItSlide() {
  const features = [
    {
      icon: Brain,
      title: 'Smart Learning Assistant',
      description: 'AI-powered tutor that adapts to your learning style',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageCircle,
      title: 'Debates Instead of Answers',
      description: 'Challenges your thinking through interactive conversations',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Science Focus',
      description: 'Specializes in precision, error analysis, and physics concepts',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Target,
      title: 'Targeted Learning',
      description: 'Identifies and addresses knowledge gaps effectively',
      color: 'from-orange-500 to-red-500',
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
          What Is It?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A revolutionary educational tool that transforms passive learning into active intellectual engagement
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Central Concept */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Brain className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Core Philosophy</h2>
            <Brain className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Instead of simply providing answers, our AI challenges students to defend their understanding,
            creating a dynamic learning environment that mirrors real academic discourse.
          </p>
        </div>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>
    </div>
  )
}