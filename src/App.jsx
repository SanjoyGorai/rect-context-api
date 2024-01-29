import { useState, useContext, useEffect } from 'react'
import './App.css'
import { UserContext, UserContextProvider } from './context/UserContext';
import User from './components/User';
import { Student } from './components/Student';
import { StudentContextProvider } from './context/StudentContext';
import axiosInstance from './api/Product';
import axios from 'axios'
import Cart from './components/Cart';
import CartContext, { CartContextProvider } from './context/CartContext';

function App() {

  const user = useContext(UserContext);
  // console.log("User", user);

  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);

  const cartItems = useContext(CartContext);
  console.log('Card Item App : ', cartItems);


  useEffect(() => {
    ; (async () => {
      const response = await axiosInstance.get('/api/v1/products');
      console.log(response.data);
      setProduct(response?.data);
    })();

  }, [])

  function handleClick(e) {
    console.log("Before Click :", cartItems.cartItem);
    cartItems.setCartItem(2)
    console.log("After Item :", cartItems.cartItem);
  }

  return (


    <>
      <Cart />
      <h1>Product</h1>
      <div className='flex flex-wrap gap-2'>
        {
          product?.map((product, index) => {
            return (
              <div key={index} className='mt-3'>
                <img src={product?.images} alt={product?.title.slice(0, 10)} className='w-52' />
                <h3>{product?.title.slice(0, 20)} </h3>
                <h3>{product?.price} </h3>
                <h3>{product?.category?.name} </h3>
                <button onClick={handleClick} className='bg-yellow-400' value='Add to cart button'>Add to cart</button>
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
