import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { useWishlist } from '../../context/WishlistContext'

function Product() {
  const {wishlist,    setWishlist,handleWishlist}=useWishlist()
  const [product, setProduct] = useState([])
  
   const axiosAllData=  async ()=>{
    const res= await axios.get('http://localhost:3000/')
    const data=res.data.data
    setProduct(data)
   }
   useEffect(() => {
     axiosAllData()
   
   }, [])
   
  return (
    <div className='container'>
      <div >
      {product && product.map((item)=>(
        <ul key={item._id}>
          <li><div><img src={item.src} alt="" /></div></li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li><Link to={`/detail/${item._id}`}>view</Link></li>
          <li><button onClick={()=>handleWishlist(item)}>wishlist</button></li>
        </ul>
      ))}
      </div>
    </div>
  )
}

export default Product