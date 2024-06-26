import { PorkAdobo, BeefSinigang } from '../Recipe/Recipe';

const RecipeTest = () => {
  return (
    <div>
        <p>
                    Here's a recipe for {PorkAdobo.Name}:
                    <ul>
                        <li>Meat: {PorkAdobo.Ingridients.Meat}</li>
                        <li>Condiments: {PorkAdobo.Ingridients.Condiments}</li>
                        <li>Spices: {PorkAdobo.Ingridients.Spices}</li>
                        <li>Instruction: {PorkAdobo.Instruction}</li>
                        <li>Serving: {PorkAdobo.Serving}</li>
                        <li>Type: {PorkAdobo.Type}</li>
                    </ul>
                </p>
                <p>
                    Here's a recipe for {BeefSinigang.Name}:
                    <ul>
                        <li>Meat: {BeefSinigang.Ingridients.Meat}</li>
                        <li>Condiments: {BeefSinigang.Ingridients.Condiments}</li>
                        <li>Spices: {BeefSinigang.Ingridients.Spices}</li>
                        <li>Instruction: {BeefSinigang.Instruction}</li>
                        <li>Serving: {BeefSinigang.Serving}</li>
                        <li>Type: {BeefSinigang.Type}</li>
                    </ul>
                </p>
      
    </div>
  )
}

export default RecipeTest
