import { motion } from 'framer-motion'
import { Sparkles, Brain, Zap } from 'lucide-react'
import { Button } from '../ui/Button'

export function TitleSlide() {
  return (
    <div className="text-center space-y-8">
      {/* Floating Icons */}
      <div className="relative">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 left-1/4"
        >
          <Brain className="h-12 w-12 text-blue-500/30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -top-16 right-1/4"
        >
          <Sparkles className="h-10 w-10 text-purple-500/30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-24 right-1/3"
        >
          <Zap className="h-8 w-8 text-yellow-500/30" />
        </motion.div>
      </div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-6xl md:text-7xl font-bold font-heading bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          Revolutionizing Learning
        </h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
        >
          with Interactive Arguments
        </motion.h2>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="space-y-6"
      >
        <p className="text-2xl md:text-3xl text-gray-600 font-medium">
          An EdTech Tool That Thinks Back
        </p>

        {/* Animated Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { text: 'AI-Powered Debates', delay: 1.2, icon: Brain },
            { text: 'Critical Thinking', delay: 1.4, icon: Zap },
            { text: 'Smart Learning', delay: 1.6, icon: Sparkles },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: item.delay }}
                className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="pt-8"
      >
        <Button
          variant="gradient"
          size="lg"
          className="text-xl px-8 py-4 shadow-2xl animate-pulse-glow"
        >
          Experience the Future of Learning
        </Button>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  )
}