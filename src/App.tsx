// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'



// import Header from './components/Header'
// import Hero from './components/Hero'
import SignUpForm from './pages/SignUpForm'
import Landing_page from './pages/Landing_page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
