import React from 'react'
import Admin from './Admin'
import AdminBets from './AdminBets'
import Adminbgcar from './Adminbgcar'
import Adminbike from './Adminbike'


const Adminbgbet = () => {
  return (
    <>
    <Admin  bet="activeclass"  component1={<AdminBets />} component2={<Adminbike/>} component3={<Adminbgcar/>} />

    </>
  )
}

export default Adminbgbet 