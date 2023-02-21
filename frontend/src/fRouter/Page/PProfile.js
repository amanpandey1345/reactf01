import React from 'react'
import NewDash from '../../Conpo/NewDash'

import CAccStudent from '../Content/CAccStudent'
import CProfile from '../Content/CProfile'

// import Cadmission from '../Content/Cadmission'
const PProfile = ({history,params}) => {
  return (
    <>
     <NewDash Dtitle={"Account"} Admin={<CProfile history={history} params={params} />} account={true}  />
    </>
  )
}

export default PProfile