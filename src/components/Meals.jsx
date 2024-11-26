import FoodItem from "./FoodItem";

export default function Meals({ foodItems, openMeals }) {
  return (
    <div className="meals">
      <h1>Our Meals</h1>
      <ul id="meals">
        {foodItems.map((foodItem) => (
          <FoodItem
            key={foodItem.id}
            foodObj={foodItem}
            addToCart={() => openMeals(foodItem)}
          />
        ))}
      </ul>
    </div>
  );
}
