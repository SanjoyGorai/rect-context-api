import { createContext, useState } from "react";


 const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(1)

    return (
        <CartContext.Provider value={{ cartItem, setCartItem }} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;

export { CartContextProvider }