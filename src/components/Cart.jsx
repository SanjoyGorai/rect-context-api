import React, { useContext } from 'react'
import CartContext from '../context/CartContext';

const Cart = () => {

    const cartContext = useContext(CartContext);
    console.log('Card Componant: ', cartContext);

    return (
        <div className='flex '>
            <h3 className='font-bold bg-orange-400 p-2 rounded-xl'>Cart</h3>
            <span className='bg-red-500 rounded-full p-1 font-bold '>
                {cartContext?.cartItem ? cartContext.cartItem : '0'}
            </span>
        </div>
    )
}

export default Cart