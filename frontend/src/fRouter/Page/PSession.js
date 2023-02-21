import React from 'react'
import NewDash from '../../Conpo/NewDash'
import CSession from '../Content/CSession'



const PSession = () => {
  return (
    <>
    <NewDash Dtitle={"Session"} Admin={<CSession/>} sessions={true} />
    </>
  )
}

export default PSession