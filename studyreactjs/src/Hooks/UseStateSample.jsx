import React, { useState } from 'react'



const UseStateSample = () => {

const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is the UseState Hook</h1>

      <div>
<button onClick={() => setCount(count + 1)}>Count {count} </button>

      </div>



    </div>
  )
}

export default UseStateSample
