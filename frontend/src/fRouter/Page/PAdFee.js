import React from 'react'
import CAdStudent from '../Content/CAdStudent'
import NewDash from '../../Conpo/NewDash'
import CAdFee from '../Content/CAdFee'
const PAdFee = ({history}) => {
  return (
    <>
         <NewDash Dtitle={"Account"} Admin={<CAdFee history={history} />} tools={true}  />
    </>
  )
}   

export default PAdFee