import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DataRecipes from './Data/DataRecipes.json';
import {RecipeList} from './components/RecipeList/RecipeList';


export const App = () => {
    return (
<div>
<Header/>
<RecipeList DataRecipes={DataRecipes}/>
<Footer/>
</div>
)
};

export default App;