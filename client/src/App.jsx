import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import Edit from './Components/Edit'

const App = () => {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<Add/>}/>
  <Route path='/edit/:id' element={<Edit/>}/>
  
</Routes>
    </>
  )
}

export default App