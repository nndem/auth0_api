import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </div>
  );
}

export default App;
