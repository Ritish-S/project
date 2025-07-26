import { Routes, Route, Navigate } from 'react-router-dom'
import { Presentation } from './components/Presentation'
import { Dashboard } from './components/Dashboard'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/presentation" replace />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App