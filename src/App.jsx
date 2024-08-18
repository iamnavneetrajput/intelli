import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Nav from './component/Nav';
import Submenu from './component/Submenu';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './component/Footer';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Blog from './pages/Blog'
import './assets/design/global.css';
import './assets/design/screen.css';
// import dayModeSound from './assets/system-sound/daytoggle.mp3';
// import nightModeSound from './assets/system-sound/nighttoggle.mp3';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    playModeSound(newTheme);
  };

  const playModeSound = (theme) => {
    const audio = new Audio(theme === 'light' ? dayModeSound : nightModeSound);
    audio.play();
  };

  return (
    <Router>
      <div className="app-container">
        <Nav />
        <Submenu isNightMode={theme === 'dark'} onToggle={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/shorts" element={<Shorts />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
