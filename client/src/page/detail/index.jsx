import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detail() {
  const [product, setProduct] = useState([])
  const {id}=useParams()
  const axiosAllData=  async ()=>{
    const res= await axios.get(`http://localhost:3000/${id}`)
    const data=res.data.data
    setProduct(data)
   }
   useEffect(() => {
     axiosAllData()
   
   }, [])
  return (
    <div>
      <img src={product.src} alt="" />
      
    </div>
  )
}

export default Detail