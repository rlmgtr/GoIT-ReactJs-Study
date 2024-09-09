import React, { useState } from 'react'

const UseStateSampleTwo = () => {

const initialCount = 0;
const [count, setcount] = useState(initialCount);
 return (
    <div>
        <h1>This is another example for UseState</h1>
Count: {count}
<p></p>
<button onClick={() => setcount(count - 1) }> Decerement</button>   
<button onClick={() => setcount(initialCount) }>Reset</button>      
<button onClick={() => setcount(count + 2) }> Increment</button>    
</div>

  )
}

export default UseStateSampleTwo
