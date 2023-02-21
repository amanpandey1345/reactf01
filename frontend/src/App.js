import React from 'react'

import Mainrouter from './fRouter/Mainrouter';
import Loader from './Conpo/Loader';
import { useEffect } from 'react';
import { useState } from 'react';



const App = () => { 

  const [logo, setLogo] = useState(true)
  useEffect(() => {
    // setLogo(false)
    setInterval(() => {
      setLogo(false)
    }, 1000);
  }, [])
  
  return (
    <>

  {logo === true ? <Loader/>:<Mainrouter/>}

    </>
  )
}

export default App        