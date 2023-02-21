import React from 'react'
import CAdStudent from '../Content/CAdStudent'
import NewDash from '../../Conpo/NewDash'
const PAdStudent = ({history}) => {
  return (
    <>
         <NewDash Dtitle={"Account"} Admin={<CAdStudent history={history} />} tools={true}  />
    </>
  )
}

export default PAdStudent