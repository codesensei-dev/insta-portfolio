import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ThemeToggle from './components/ThemeToggle';
import Particles from './components/Particles';

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const particleColor = useMemo(
    () => theme === 'dark' ? '255, 255, 255' : '12, 74, 110',
    [theme]
  );

  return (
    <>
      <div className="bg-gradient" />
      <Particles color={particleColor} quantity={70} staticity={50} ease={50} />
      <ThemeToggle isDark={theme === 'dark'} onToggle={toggleTheme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Navigate to="/links" replace />} />
          <Route
            path="/links"
            exact
            element={
              <div className="background">
                <Home />
              </div>
            }
          />
          <Route
            path="/links/:groupid"
            exact
            element={
              <div className="background">
                <Home />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="background">
                <NotFound />
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
