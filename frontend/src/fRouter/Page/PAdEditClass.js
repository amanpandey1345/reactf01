import React from 'react'
import NewDash from '../../Conpo/NewDash'
import CAdEditClass from '../Content/CAdEditClass'


const PAdEditClass = ({history}) => {
  return (
    <>
     <NewDash Dtitle={"Account"}Admin={    <CAdEditClass history={history} />} tools={true}  />
    </> 
  )
}

export default PAdEditClass