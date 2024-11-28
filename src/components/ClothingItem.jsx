import DefaultBtn1 from "./DefaultButton1";

export default function ClothingItem({ clothingObj, addToCart }) {

  return (
    <li className="clothing-item">
      <article>
        <img src={`/${clothingObj.image}`} alt="clothing-item" />
        <div>
          <h3>{clothingObj.name}</h3>
          <span className="clothing-item-price">Price: ${clothingObj.price}</span>
          <span className="clothing-item-quantity">Quantity: {clothingObj.stock}</span>
          <p className="clothing-item-description">{clothingObj.description}</p>
          
          <div className="clothing-item-category">
            <span><strong>{clothingObj.category}</strong></span>
          </div>
        </div>
        <p>
          <DefaultBtn1 className="clothing-item-actions" onClick={addToCart}>
            Add to Cart
          </DefaultBtn1>
        </p>
      </article>
    </li>
  );
}
