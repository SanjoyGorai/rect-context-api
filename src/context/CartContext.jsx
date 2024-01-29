import { createContext, useState } from "react";


 const CartContext = createContext(0);

const CartContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(0)

    return (
        <CartContext.Provider value={{ cartItem, setCartItem }} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;

export { CartContextProvider }