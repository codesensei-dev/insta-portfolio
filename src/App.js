import logo from './logo.svg';
import './App.css';
import ProfileSection from './components/ProfileSection'
import ContentSection from './components/ContenSection';
import { useEffect, createContext, useContext, useState } from 'react';
import User from './models/User';
import jsondata from './users/codesensei.dev/codesensei.dev.json'
export const userContext = createContext();

export default function App() {
  let user = 'codesensei.dev';
  const [userObj, setUserObj] = useState(new User(jsondata));


  return (
    <div className="background">
      <userContext.Provider value={userObj}>
        <ProfileSection />
        <ContentSection />
      </userContext.Provider>
    </div>
  );
}



