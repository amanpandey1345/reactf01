import React from 'react'
import Admin from './Admin'
import AdminBets from './AdminBets'
import Adminbike from './Adminbike'
import AdminUser from './AdminUser'
// import AdminUser from './AdminUser'

const Adminbg = () => {
  return (
    <>
    <Admin  dashboard="activeclass" component2={<AdminBets/>} component1={<AdminUser/>}  component3={<Adminbike/>}/>

    </>
  )
}

export default Adminbg