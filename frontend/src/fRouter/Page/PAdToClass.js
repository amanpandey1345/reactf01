import React from 'react'
import NewDash from '../../Conpo/NewDash'
import CClasses from '../Content/CClasses'
// import Cadmission from '../Content/Cadmission'
const PAdToClass = ({history}) => {
  return (
    <>
     <NewDash Dtitle={"Account"} Admin={<CClasses history={history} />} tools={true}  />
    </>
  )
}
   
export default PAdToClass    