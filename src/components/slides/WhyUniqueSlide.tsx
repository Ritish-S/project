import { motion } from 'framer-motion'
import { Rocket, Sword, Zap, Users } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'

export function WhyUniqueSlide() {
  const uniqueFeatures = [
    {
      icon: Sword,
      title: 'Argues with students, not for them',
      description: 'Takes an oppositional stance to strengthen student reasoning',
      highlight: true,
    },
    {
      icon: Zap,
      title: 'Applies intellectual pressure to deepen learning',
      description: 'Creates cognitive tension that leads to breakthrough understanding',
      highlight: true,
    },
    {
      icon: Users,
      title: 'Simulates real academic thinking and defense',
      description: 'Prepares students for genuine scholarly discourse',
      highlight: true,
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header with Rocket */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-6"
        >
          <Rocket className="h-16 w-16 mx-auto text-blue-600" />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why It's Unique
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The first EdTech tool that challenges students instead of helping them
        </p>
      </motion.div>

      {/* First EdTech Tool Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="h-10 w-10" />
            <h2 className="text-3xl font-bold">First EdTech Tool That:</h2>
            <Rocket className="h-10 w-10" />
          </div>
        </div>
      </motion.div>

      {/* Unique Features */}
      <div className="max-w-5xl mx-auto space-y-6">
        {uniqueFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="p-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Innovation Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="h-8 w-8 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-800">Revolutionary Approach</h2>
            <Zap className="h-8 w-8 text-orange-500" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            While other tools provide answers and guidance, we create resistance.
            This fundamental shift transforms learning from passive consumption to active construction of knowledge.
          </p>
        </div>
      </motion.div>

      {/* Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-red-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-red-600 mb-4">Traditional EdTech</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✗ Provides direct answers</li>
                <li>✗ Reduces cognitive load</li>
                <li>✗ Creates dependency</li>
                <li>✗ Passive learning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-2 border-green-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">InteractiveLearn</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Challenges reasoning</li>
                <li>✓ Increases cognitive engagement</li>
                <li>✓ Builds independence</li>
                <li>✓ Active construction</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/6 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"
        />
      </div>
    </div>
  )
}