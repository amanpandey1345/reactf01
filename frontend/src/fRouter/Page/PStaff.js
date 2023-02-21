import React from 'react'

import NewDash from '../../Conpo/NewDash'

import CStaff from '../Content/CStaff'


const PStaff= () => {
  return (
    <>
    <NewDash Dtitle={"Staff"} Admin={<CStaff/>} staffs={true}  />
    </>
  )
}

export default PStaff


