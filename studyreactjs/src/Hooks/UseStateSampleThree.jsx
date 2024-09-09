import React, { useState } from 'react'

const UseStateSampleThree = () => {
const [name, setName] = useState({firstName:"", lastName:""})

    return (
    <div>
      <h1>This is the third example of useState</h1>


<form>
    <input type='text' value={name.firstName} onChange={ e => setName({ ...name, firstName: e.target.value})} />  
    <input type='text' value={name.lastName} onChange={ e => setName({...name, lastName: e.target.value})} />
<h3>Your Firstname is: {name.firstName} </h3>
<h3>Your Lastname is: {name.lastName}</h3>
<h2>{JSON.stringify(name)}</h2>

</form>
    </div>
  )
}

export default UseStateSampleThree

// https://www.youtube.com/watch?v=-3lL8oyev9w&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=4
// 6:53