import React from 'react'

import NewDash from '../../Conpo/NewDash'
import Cdashboard from '../Content/Cdashboard'


const PDash= () => {
  return (
    <>
    <NewDash Dtitle={"Dashboard"} Admin={<Cdashboard/>} Dash={true}  />
    </>
  )
}

export default PDash


