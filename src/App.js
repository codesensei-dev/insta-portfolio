import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/links" replace />} />
      <Route
        path="/links"
        element={
          <div className="background">
              <Home />
          </div>
        }
      />
      <Route
        path="/links/:groupid"
        element={
          <div className="background">
              <Home />
          </div>
        }
      />
    </Routes>
  );
}



