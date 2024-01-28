import { useState, useContext } from 'react'
import './App.css'
import { UserContext, UserContextProvider } from './context/UserContext';
import User from './components/User';
import { Student } from './components/Student';
import { StudentContextProvider } from './context/StudentContext';



function App() {

  const user = useContext(UserContext);
  console.log("User", user);

  const [count, setCount] = useState(0)

  return (

    <div>
      <h1>React JS Context API App</h1>
      <User />
      <StudentContextProvider>
        <Student />
      </StudentContextProvider>
    </div>

  )
}

export default App
