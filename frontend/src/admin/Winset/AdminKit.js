import React from 'react'
import Admin from '../Admin'
import Winset from './Winset'
// import AdminUser from './AdminUser'

const AdminKit = () => {
  return (
    <>
    <Admin  Wallets="activeclass"  component1={<Winset/>} />

    </>
  )
}

export default AdminKit