import {
  Routes,
  Route,
} from "react-router-dom";
import React, { createContext, useState } from "react";

import SideNav from './components/SideNav';
import LiveBugs from './components/LiveBugs';
import DeadBugs from './components/DeadBugs';
import NewBug from './components/NewBug';
import MyBugs from "./components/MyBugs";
import Profile from './components/Profile';
import Login from "./components/Login";

import './App.css';

export const UserContext = createContext({});

export function App() {  
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    userType: '',
    name: '',
    userID: ''
  });

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} setUser={setUser} />;
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <SideNav />
        <Routes>
          <Route path="/" element={<LiveBugs />} />
          {user.userType === 'Submitter' ? <Route path="/new-bug" element={<NewBug />} /> :
            <Route path="/my-bugs" element={<MyBugs />} />}
          <Route path="/dead-bugs" element={<DeadBugs />} />
          <Route path="/profile" element={<Profile setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
