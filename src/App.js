import { createContext, useState } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import User from './models/User';
import jsondata from './users/codesensei.dev/codesensei.dev.json'
import Home from './pages/Home';
export const userContext = createContext();

export default function App() {
  let user = 'codesensei.dev';
  const [userObj, setUserObj] = useState(new User(jsondata));


  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/links" replace />}
      />
      <Route
        path="/links"
        element={
          <div className="background">
            <userContext.Provider value={userObj}>
              <Home />
            </userContext.Provider>
          </div>
        }
      />
      <Route
        path="/links/:groupid"
        element={
          <div className="background">
            <userContext.Provider value={userObj}>
              <Home />
            </userContext.Provider>
          </div>
        }
      />
    </Routes>
  );
}



