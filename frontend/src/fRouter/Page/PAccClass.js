import React from 'react'
import NewDash from '../../Conpo/NewDash'
import CAccClass from '../Content/CAccClass'

// import Cadmission from '../Content/Cadmission'
const PAccClass = ({history}) => {
  return (
    <>
     <NewDash Dtitle={"Account"} Admin={<CAccClass history={history}  />} account={true}  />
    </>
  )
}

export default PAccClass