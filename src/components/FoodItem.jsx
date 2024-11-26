import DefaultBtn1 from "./DefaultButton1";

export default function FoodItem({ foodObj, addToCart }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`/${foodObj.image}`} alt="food-item" />
        <div>
          <h3>{foodObj.name}</h3>
          <span className="meal-item-price">${foodObj.price}</span>
          <p className="meal-item-description">{foodObj.description}</p>
        </div>
        <p>
          <DefaultBtn1 className="meal-item-actions" onClick={addToCart}>
            Add to Cart
          </DefaultBtn1>
        </p>
      </article>
    </li>
  );
}
