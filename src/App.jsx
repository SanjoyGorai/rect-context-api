import { useState ,useContext} from 'react'
import './App.css'
import { UserContext, UserContextProvider } from './context/UserContext';
import User from './components/User';



function App() {

  const user = useContext(UserContext);
  console.log("User", user);

  const [count, setCount] = useState(0)

  return (

    <div>
{/* <UserContextProvider> */}
      <User/>
{/* </UserContextProvider> */}
      App
    </div>

  )
}

export default App
