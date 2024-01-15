import React, { useEffect, useState } from 'react'
import './index.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Add() {
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
    const res = await axios.post('http://localhost:3000/', data)

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
      <br />
      <table>
        <thead>
          <tr>
            <th>img</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {product && product.map((item) => (
            <tr key={item._id}>
              <td><img src={item.src} alt="" /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Add