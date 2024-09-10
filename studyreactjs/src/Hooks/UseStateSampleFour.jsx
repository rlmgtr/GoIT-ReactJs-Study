import { useState } from "react"


const UseStateSampleFour = () => {

const [items, setItems] = useState([])

  return (
    <div>
      <h1>This is use State Sample 4</h1>
      <p />
  
<ul>

{items.map( item => (
    <li key={item.id}>{item.value}</li>
))}   

</ul>






    </div>
  )
}

export default UseStateSampleFour


// https://www.youtube.com/watch?v=RZ5wKYbOM_I&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=5
