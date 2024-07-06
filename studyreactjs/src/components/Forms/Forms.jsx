import css from './Froms-style.css'

const Forms = () => {
  return (
    <div>
      <div class="formStyle">
        Name  
        <input type='name' placeholder='Input Name'></input>
        <br></br>
        <br></br>
        Number
        <input type='number' placeholder='Input Number'></input>
        <br></br>
        <br></br>
        <button>Add Contacts</button>
      </div>

      <div class="recordDisplay">
        Saved Number

      </div>
    </div>
  )
}

export default Forms