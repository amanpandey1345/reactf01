import React from 'react'
import Admin from '../Admin'
import AdminUpDeposit from '../AdminUpdateDeposit/AdminUpDeposit'
import AdminDeposit from './AdminDeposit'


const AdminbgDeposit = ({history}) => {
  return (
    <>
        <Admin  deposit="activeclass"  component1={<AdminDeposit/>}  component2={<AdminUpDeposit history={history} />} />
    </>
  )
}

export default AdminbgDeposit