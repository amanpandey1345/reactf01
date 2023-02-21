import React from 'react'
import Admin from '../Admin'
import AdminWith from '../AdminUpdateWithdrawal/AdminWith'
import AdminWithdrawal from './AdminWithdrawal'

const AdminbgWithdrawal = ({history}) => {
  return (
    <>
        <Admin  withdrawal="activeclass"  component1={<AdminWithdrawal/>}  component2={<AdminWith history={history}/>}/> 
    </>
  )
}

export default AdminbgWithdrawal