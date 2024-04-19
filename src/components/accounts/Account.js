import React from 'react'
import { Outlet } from 'react-router-dom'

const Account = () => {
  return (
    <>
        <div className='beadCrumb'>
            <div>Account</div>
            <Outlet/>
        </div>
    </>
  )
}

export default Account