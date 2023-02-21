import React from 'react'
import NewDash from '../../Conpo/NewDash'

import CSession from '../Content/CSession'
// import Cadmission from '../Content/Cadmission'
const PAdminTool = ({history}) => {
  return (
    <>
     <NewDash Dtitle={"Account"}Admin={<CSession  history={history}  />} tools={true}  />
    </> 
  )
}

export default PAdminTool