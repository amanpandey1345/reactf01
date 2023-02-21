import React from 'react'
import Admin from './Admin'
import AdminPower from './AdminUpdateUsers/AdminPower'
import AdminShowTime from './AdminUpdateUsers/AdminShowTime'

import AdminUser from './AdminUser'

const Adminbguser = () => {
  return (
    <>
    <Admin userinfo="activeclass"  component1={<AdminUser/>} component2={<AdminPower/>} component3={<AdminShowTime/>} />
    </>
  )
}

export default Adminbguser