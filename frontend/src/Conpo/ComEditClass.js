import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ComEditClass = ({icons, id}) => {

  return (

    <div>
        {/* <Link to={`/class/${id}`}> */}
        <Button  variant="standard"  >
        {icons}
      </Button>
        {/* </Link> */}
    </div>
  )
}

export default ComEditClass