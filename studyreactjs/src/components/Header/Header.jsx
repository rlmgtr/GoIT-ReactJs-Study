import css from './Header-module.css'

let testButton = () => {alert("test button message")};

const Header = () => {
  return (
    <div>
    <header>
      <h1>this is a sample header </h1>
    </header>
    <p>
      <button onClick={testButton}>clcik me</button>
    </p>

    </div>
 
  )
}

export default Header
