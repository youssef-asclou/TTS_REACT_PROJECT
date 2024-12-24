// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Header from './components/Header'
// import Hero from './components/Hero'
import SignUpForm from './pages/SignUpForm'
import Landing_page from './pages/Landing_page'
import Header from "./components/Header"
import LoginForm  from './components/LoginForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  

  return (
    <GoogleOAuthProvider clientId="835350873989-2k0b2i1fqor6r6nbte9q241urth1id14.apps.googleusercontent.com">
    <Router>
      <div>
        <header />
        <Routes>
          <Route path="/" element={<Landing_page/>} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router></GoogleOAuthProvider>
  )
}

export default App
