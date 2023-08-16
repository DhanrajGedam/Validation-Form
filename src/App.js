import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage'
import GetApi from './GetApi'



export default function() {
  return (
   <>
  <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/GetApi" element={<GetApi/>}/>
  </Routes>

   </>
  )
}



 