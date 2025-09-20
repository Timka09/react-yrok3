import { RecipInfo } from "../RecipInfo/RecipInfo";

export const RecipList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.name}>
          <RecipInfo
            title={recipe.name}
            time={recipe.time}
            servings={recipe.servings}
            calories={recipe.calories}
            difficulty={recipe.difficulty}
            image={recipe.image}
          />
        </li>
      ))}
    </ul>
  );
};
