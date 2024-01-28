import { useState, useContext, useEffect } from 'react'
import './App.css'
import { UserContext, UserContextProvider } from './context/UserContext';
import User from './components/User';
import { Student } from './components/Student';
import { StudentContextProvider } from './context/StudentContext';
import axiosInstance from './api/Product';
import axios from 'axios'

function App() {

  const user = useContext(UserContext);
  // console.log("User", user);

  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    ; (async () => {
      const response = await axiosInstance.get('/api/v1/products');
      console.log(response.data);
      setProduct(response?.data);
    })();

  }, [])


  return (

    <>
      <h1>Product</h1>
      <div className='flex flex-wrap gap-2'>
        {
          product?.map((product) => {
            return (
              <div key={product?.id} className='mt-3'>
                <img src={product?.images} alt="" className='w-52' />
                <h3> T{product?.title.slice(0,20)} </h3>
              </div>
            )
          })
        }
      </div>


      {/* <div>
      <h1>React JS Context API App</h1>
      <User />
      <StudentContextProvider>
        <Student />
      </StudentContextProvider>
    </div> */}


    </>

  )
}

export default App
