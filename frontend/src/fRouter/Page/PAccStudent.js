import React from 'react'
import NewDash from '../../Conpo/NewDash'

import CAccStudent from '../Content/CAccStudent'

// import Cadmission from '../Content/Cadmission'
const PAccStudent = ({history,params}) => {
  return (
    <>
     <NewDash Dtitle={"Account"} Admin={<CAccStudent history={history} params={params} />} account={true}  />
    </>
  )
}

export default PAccStudent