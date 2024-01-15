import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'

function Product() {
  
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
          <li></li>
        </ul>
      ))}
      </div>
    </div>
  )
}

export default Product