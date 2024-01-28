import { createContext, useState } from "react";


 const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cardItem, setCardItem] = useState(1)

    return (
        <CartContext.Provider value={{ cardItem, setCardItem }} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;

export { CartContextProvider }