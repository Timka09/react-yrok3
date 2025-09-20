import recipes from "../src/recipes.json"
import { RecipList } from "./components/RecipList/RecipList"

function App() {

  return (
    <>
      <RecipList recipes = {recipes} />
    </>
  )
}

export default App
