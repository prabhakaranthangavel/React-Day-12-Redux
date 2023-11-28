import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const counter = useSelector ((state) => state)

    return (
      <div>
        <div>
          Count : {counter}
        </div>
  
        <button onClick={ () =>dispatch( {type : 'INCR'} )}>Add</button>
        <button onClick={ () =>dispatch( {type : 'DECR'} )}>Subtract</button>
        <button onClick={ () =>dispatch( {type : 'ZERO'} )}>Zero</button>
      </div>
    )
  }

export default App

// *************************************************************************************************************************