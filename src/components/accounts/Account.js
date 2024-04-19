import React from 'react'
import { Outlet } from 'react-router-dom'

const Account = () => {
  return (
    <>
        <div className='beadCrumb'>
            <div>Account</div>
            <span> &gt; </span>
            <Outlet/>
        </div>
    </>
  )
}

export default Account