import React from 'react'
import './index.scss'
import { useWishlist } from '../../context/WishlistContext';

function Wishlist() {
  const {wishlist,setWishlist,handleWishlist}=useWishlist()
  console.log("test",wishlist);

  return (
    <div className="">
          {wishlist && wishlist.map((item)=>(
            
              <ul key={item._id}>
              <li>{item.name}</li>
              <li><img src={item.src} alt="" /></li>
              <li>{item.price}</li>
              <li><button onClick={()=>handleWishlist(item)}>delete</button></li>
          </ul>
))}
      </div>
  )
}

export default Wishlist