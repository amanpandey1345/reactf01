import React from 'react'
import NewDash from '../../Conpo/NewDash'
import CAccount from '../Content/CAccount'
// import Cadmission from '../Content/Cadmission'
const PAccount = ({history}) => {
  return (
    <>
     <NewDash Dtitle={"Account"} Admin={<CAccount history={history}  />} account={true}  />
    </>
  )
}

export default PAccount