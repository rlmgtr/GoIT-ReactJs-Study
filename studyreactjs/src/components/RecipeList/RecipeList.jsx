export const RecipeList = ({DataRecipes}) => {
return ( 
<div>
<ul>
  {DataRecipes.map(DataRecipe => (
    <li>
    <h3>{DataRecipe.name}</h3>
    <img src={DataRecipe.image} width="250" height="200" alt="Recipe image"/>
    </li>
  ))}
 
</ul>
  
  
</div>
)
};

