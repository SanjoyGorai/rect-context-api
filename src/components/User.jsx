import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const User = () => {

    const user = useContext (UserContext); 

  return (
    <div>
        <h2>User Componant</h2>
        <h3>{user?.user?.fullName}</h3>
        <h3>{user?.user?.age}</h3>
        <h3>{user?.user?.height}</h3>
        <h3>{user?.user?.relegion}</h3>
        <h3>{user?.user?.skinColor}</h3>
    </div>
  )
}

export default User