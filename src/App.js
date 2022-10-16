import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './sections/Routes'
import Loading from './components/Loading'

function App() {
  const { isLoading } = useSelector((state) => state.globalReducer)
  return (
    <Router>
      <Routes />
      {isLoading && <Loading />}
    </Router>
  )
}

export default App
