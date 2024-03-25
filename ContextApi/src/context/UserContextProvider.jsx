import React, { useState } from "react";
import UserContext from "./UserContext";
function UserContextProvider({ children }) {
  const [User, setUser] = useState('');
  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
// import React from "react";
// import UserContext from "./UserContext";

// const UserContextProvider = ({children}) => {
//     const [user, setUser] = React.useState(null)
//     return(
//         <UserContext.Provider value={{user, setUser}}>
//         {children}
//         </UserContext.Provider>
//     )
// }

// export default UserContextProvider