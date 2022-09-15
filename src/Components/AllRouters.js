import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from './Auth'
import Login from './Login'

const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/auth' element={<Auth/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRouters