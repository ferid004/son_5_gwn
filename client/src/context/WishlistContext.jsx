import { createContext, useContext, useState } from "react";
import useLocalstorge from "../hook/useLocalstorge";


export const wishlistContext = createContext()

export const WishlistProvider=({ children }) =>{
    const [wishlist, setWishlist] = useLocalstorge(`wish`)

    function handleWishlist(item) {
        const index=wishlist.findIndex(x=>x._id===item._id)
        if (index===-1) {
            setWishlist([...wishlist,item])
            return
        }
        setWishlist(wishlist.filter(x=>x._id!==item._id))
    }
    const data = {
        wishlist,
        setWishlist,
        handleWishlist,
    }
    console.log("context",wishlist);
    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )

}

export const useWishlist=()=>useContext(wishlistContext)