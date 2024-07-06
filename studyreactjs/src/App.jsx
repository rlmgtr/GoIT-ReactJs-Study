import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Reviews from './components/Reviews/Reviews';

const testbuttonn = () => {alert("this is for the test button")};

export const App = () => {
    return (
<div>
<Header/>
<Reviews/>
<button onClick={testbuttonn}>test button 2</button>
<Footer/>
</div>

)
};

export default App;