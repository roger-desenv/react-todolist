import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState('Hello World')
  
  return(
    <>
      <div className='container'>{message}</div>
      <button onClick={() => setMessage ("Hellooowww Wooorld!")}>Mudar Mensagem</button>
    </>
    
  )
}

export default App