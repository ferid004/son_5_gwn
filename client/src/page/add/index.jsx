import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Add() {
  const [searc, setSearc] = useState('')
  const [sort, setSort] = useState('')

  const [product, setProduct] = useState([])

  const axiosAllData = async () => {
    const res = await axios.get('http://localhost:3000/')
    const data = res.data.data
    setProduct(data)
  }
  useEffect(() => {
    axiosAllData()

  }, [])

  const axiosPostData = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/', data)
      axiosAllData()
    } catch (error) {
      console.log(error.response);
      alert(error.response.data.message)
    }
  }

  const axiosDeleteData = async (id) => {
    const res = await axios.delete(`http://localhost:3000/${id}`)
    axiosAllData()
  }





  return (
    <div>

      <Formik
        initialValues={{ src: '', name: '', price: '' }}
        validationSchema={Yup.object({
          src: Yup.string()
            .required('Required'),
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          price: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          axiosPostData(values)
          resetForm()
        }}
      >
        <Form>
          <Field name="src" type="text" />
          <ErrorMessage name="src" />

          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <br />
      <input type="text" onChange={(e) => setSearc(e.target.value)} />

      <br />
      <button onClick={()=>setSort({proprety:'price',asc:true})}>artan</button>
      <button onClick={()=>setSort({proprety:'price',asc:false})}>azalan</button>
      <button onClick={()=>setSort(null)}>default</button>
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>img</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {product && product
            .filter((x) => x.name.toLowerCase().includes(searc.toLowerCase()))
            .sort((a,b) => {
              if (sort && sort.asc===true) {
                return (a[sort.proprety] > b[sort.proprety]) ? 1 : ((b[sort.proprety] > a[sort.proprety]) ? -1 : 0)
              }else if (sort && sort.asc===false) {
                return (a[sort.proprety] < b[sort.proprety]) ? 1 : ((b[sort.proprety] < a[sort.proprety]) ? -1 : 0)
                
              }else{return null}
            })
            
            .map((item) => (
              <tr key={item._id}>
                <td><img src={item.src} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={() => axiosDeleteData(item._id)}>delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>

    </div>
  )
}

export default Add