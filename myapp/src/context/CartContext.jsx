import { createContext, useState } from "react";

export const CartContext= createContext()
export const CartContextProvider=({children})=>{

    const[cartCount, setCartCount]=useState(0)

    const toggleInCart=(isCart)=>{
        setCartCount((prev)=> (isCart?prev+1:prev-1))
    }

    return(
        <CartContext.Provider value={{toggleInCart, cartCount}}>
            {children}
        </CartContext.Provider>
    )

}