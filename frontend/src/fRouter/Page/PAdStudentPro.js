import React from 'react'
import NewDash from '../../Conpo/NewDash'

import CAdStudentPro from '../Content/CAdStudentPro'
const PAdStudentPro = ({history}) => {
  return (
    <>
         <NewDash Dtitle={"Account"} Admin={<CAdStudentPro history={history}  />} account={true}  />
    </>
  )
}

export default PAdStudentPro