import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
function App() {
  return (
    <UserContextProvider>
      <h1>Chai aur Code</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
