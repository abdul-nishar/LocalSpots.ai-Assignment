import ClothingItem from "./ClothingItem";

export default function Clothes({ clothingItems, openClothes }) {
  return (
    <div className="clothes">
      <h1>Our Clothes</h1>
      <ul id="clothes">
        {clothingItems.map((clothingItem) => (
          <ClothingItem
            key={clothingItem.id}
            clothingObj={clothingItem}
            addToCart={() => openClothes(clothingItem)}
          />
        ))}
      </ul>
    </div>
  );
}
