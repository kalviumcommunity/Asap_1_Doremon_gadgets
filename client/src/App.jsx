import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Components/Body'
import Add from "./Components/Form"

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
 

  return (
    <>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Body/>}></Route>
      <Route path='/form' element={<Add/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
