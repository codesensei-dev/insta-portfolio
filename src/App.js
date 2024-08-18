import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
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
  );
}



