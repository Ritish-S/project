import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Button } from './ui/Button'
import { TitleSlide } from './slides/TitleSlide'
import { WhatIsItSlide } from './slides/WhatIsItSlide'
import { HowItWorksSlide } from './slides/HowItWorksSlide'
import { WhyUniqueSlide } from './slides/WhyUniqueSlide'
import { BenefitsSlide } from './slides/BenefitsSlide'
import { ExampleSlide } from './slides/ExampleSlide'
import { SummarySlide } from './slides/SummarySlide'
import { cn } from '@/lib/utils'

const slides = [
  { id: 1, component: TitleSlide, title: 'Title' },
  { id: 2, component: WhatIsItSlide, title: 'What Is It?' },
  { id: 3, component: HowItWorksSlide, title: 'How It Works' },
  { id: 4, component: WhyUniqueSlide, title: 'Why It\'s Unique' },
  { id: 5, component: BenefitsSlide, title: 'Key Benefits' },
  { id: 6, component: ExampleSlide, title: 'Example Use Case' },
  { id: 7, component: SummarySlide, title: 'Summary' },
]

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, currentSlide])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Slide Counter */}
      <div className="fixed top-20 right-6 z-40 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border">
        <span className="text-sm font-medium text-gray-600">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="h-8 w-8"
        >
          {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentSlide
                ? 'bg-blue-600 scale-125'
                : 'bg-white/60 hover:bg-white/80'
            )}
          />
        ))}
      </div>

      {/* Slide Content */}
      <div className="h-screen flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full max-w-6xl"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
        <div className="space-y-1">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-full text-left px-3 py-2 text-xs rounded-md transition-all duration-200',
                index === currentSlide
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 text-gray-600'
              )}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}