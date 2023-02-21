import React from 'react'
import NewDash from '../../Conpo/NewDash'
import Checkout1 from '../Checkout1'



const DashAdmin = () => {
  return (
    <>
    <NewDash Dtitle={"Session"} Admin={<Checkout1/>} sessions={true} />
    </>
  )
}

export default DashAdmin