import React, { useState, useEffect } from 'react'

const UseEffectSample = () => {

const [count, setCount] = useState(0)

useEffect(() => {document.title = `You clicked ${count} times`
})



  return (
    <div>
      <h1>This is a UseEffectSample</h1>
<button onClick={() => setCount(count + 1)}> Clicked {count} times </button>

    </div>
  )
}

export default UseEffectSample


//https://www.youtube.com/watch?v=06Y6aJzTmXY&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=6
