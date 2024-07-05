import { useState } from 'react'
import css from './TestUseState.css'



const TestUseState = () => {

    const [testNum, testSetNum] = useState(10)   
    
  return (
    <div>
      <h1>{testNum}</h1>
      <button onClick={() => testSetNum(testNum + 2)}>Add 2</button>
    </div>
  )
}

export default TestUseState
