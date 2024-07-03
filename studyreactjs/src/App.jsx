import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DataRecipes from './Data/DataRecipes.json';
import {RecipeList} from './components/RecipeList/RecipeList';
import State from './components/EventandState/State';



const testbuttonn = () => {alert("this is for the test button")};

export const App = () => {
    return (
<div>
<Header/>
<button onClick={testbuttonn}>test button 2</button>
<RecipeList DataRecipes={DataRecipes}/>
<State/>
<Footer/>
</div>
)
};

export default App;