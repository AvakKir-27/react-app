import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import { PostsProvider } from './context/PostsContext'
import { UserProvider } from './context/UserContext'
import { useTheme } from './context/ThemeContext'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import About from './pages/About'

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <main>
        <UserProvider>
          <PostsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </PostsProvider>
        </UserProvider>
      </main>
    </div>
  )
}

export default App
