import css from './RecipeListItem-module.css'

export const RecipeListItem = ({
    name,
    time,
    servings,
    calories,
    image,
    difficulty,
}) => {
    
  const isEasy = false; 
  return (
    <div class="listitemdiv">
    <li>
      <img src={image} alt="food image" width="250" height="200"/>
      <h3>{name}</h3>
      <div>
<div>
    <div>
    <span>Iconhere</span> Time: {time} minutes   
    <p>Servings: {servings}</p>
    <p>Calories: {calories}</p>
    <p>Difficulty: {isEasy ? <span>Easy</span> : <span>Hard</span>}</p>  
    </div>
</div>
        
      </div>
    </li>
    </div>
  );
};


