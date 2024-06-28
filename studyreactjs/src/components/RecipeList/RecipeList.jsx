import {RecipeListItem} from "../../RecipeListItem/RecipeListItem";

export const RecipeList = ({DataRecipes}) => {


return ( 
<div>
<ul>
  {DataRecipes.map( ({id, name, time, servings, calories, image, difficulty }) => (
    

 <RecipeListItem 
 key={id} 
 name={name} 
 time={time} 
 servings={servings} 
 calories={calories} 
 image={image} 
 difficulty={difficulty}
 />

    
  ))}
 
</ul>
  
  
</div>
)
};

