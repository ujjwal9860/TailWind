const App = () => {
  const receipe = {
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "tags": [
      "Pizza",
      "Italian"
    ],
    "userId": 45,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "reviewCount": 3,

  }


  return (
    <div>
      <h2>{receipe.name}</h2>

      <p>Servings: {receipe.servings}</p>

      <img height={200} width={200} src={receipe.image} alt={receipe.name} />

      {/* <h3>Ingredients:</h3>
      <ul>
        {receipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul> */}
      {receipe.ingredients.map((ing, i) => {
        return <h1 key={i}>{ing}</h1>
      }
      )}
    </div>
  )
}
export default App;