import { useRef, useState, useEffect } from "react"

const Register = () => {
  return (
    <div>
      
<h3>Register</h3>

<p>Username</p>
<input type='text' name='username' placeholder='' />

<p>email</p>
<input type='email' name='email' placeholder='email' />

<p>password</p>
<input type='password' name='password' placeholder='password' />


<button type='submit'>Sign up now</button>


<></>

<h5>Already have an account? </h5>
<h5>Sign in instead</h5>

    </div>
  )
}

export default Register
