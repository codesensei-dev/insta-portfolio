import { createContext, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
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
          path="/home/:groupid"
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



