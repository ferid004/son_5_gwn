import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/scss/main.scss'
import MainLayout from './layout/mainLayout'
import Home from './page/home'
import Add from './page/add'
import Wishlist from './page/wishlist'
import Detail from './page/detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>} path='/'>
            <Route element={<Home></Home>} index></Route>
            <Route element={<Add></Add>} path='/add'></Route>
            <Route element={<Wishlist></Wishlist>} path='/wishlist'></Route>
            <Route element={<Detail></Detail>} path='/detail/:id'></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
