import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { User } = useContext(UserContext);

  if (User.username != 0) {
    console.log( Object.keys(User).length);
    return <div>Welome {User.username}</div>;
  }else{
    return <div>Please Login</div>
  }
}

export default Profile;


// import React, {useContext} from 'react'
// import UserContext from '../context/UserContext'

// function Profile() {
//     const {User} = useContext(UserContext)
    
//     if (!User) return <div>please login</div>

//     return <div>Welcome {User.username}</div>
// }

// export default Profile