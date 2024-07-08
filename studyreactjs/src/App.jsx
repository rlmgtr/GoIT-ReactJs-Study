import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 
import Forms from './components/Forms/Forms';

const testbuttonn = () => {alert("this is for the test button")};

export const App = () => {
    return (
<div>
<Header/>
<button onClick={testbuttonn}>test button 2</button>
<Forms/>
<Footer/>
</div>

)
};

export default App;