import React from 'react'

import NewDash from '../../Conpo/NewDash'
import Cadmission from '../Content/Cadmission'
// import Cdashboard from '../Content/Cdashboard'


const PAdmission= () => {
  return (
    <>
    <NewDash Dtitle={"Admission"} Admin={<Cadmission/>} admiss={true} />
    </>
  )
}

export default PAdmission
