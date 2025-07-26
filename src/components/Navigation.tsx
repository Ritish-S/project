import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Presentation, BarChart3, Brain, Sparkles } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

export function Navigation() {
  const location = useLocation()

  const navItems = [
    {
      path: '/presentation',
      label: 'Presentation',
      icon: Presentation,
    },
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: BarChart3,
    },
  ]

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-blue-600" />
              <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InteractiveLearn
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className={cn(
                      'relative px-4 py-2 transition-all duration-200',
                      isActive && 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    )}
                    animated={false}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md -z-10"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <Button variant="gradient" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}