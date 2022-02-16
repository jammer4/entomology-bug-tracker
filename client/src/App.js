import {
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from "react";

import SideNav from './components/SideNav';
import LiveBugs from './components/LiveBugs';
import DeadBugs from './components/DeadBugs';
import NewBug from './components/NewBug';
import MyBugs from "./components/MyBugs";
import Profile from './components/Profile';
import Login from "./components/Login";
import { UserContext } from "./context/UserContext";

import './App.css';

function App() {  
  const [userType, setUserType] = useState('Developer');
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [userID, setUserID] = useState('');

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} setUserType={setUserType} setName={setName} setUserID={setUserID}/>;
  }

  return (
    <UserContext.Provider value={userType}>
      <div className="App">
        <SideNav />
        <Routes>
          <Route path="/" element={<LiveBugs />} />
          {userType === 'Submitter' ? <Route path="/new-bug" element={<NewBug />} /> :
            <Route path="/my-bugs" element={<MyBugs userID={userID}/>} />}
          <Route path="/dead-bugs" element={<DeadBugs />} />
          <Route path="/profile" element={<Profile setLoggedIn={setLoggedIn} name={name} />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
