import DefaultBtn1 from "./DefaultButton1";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>
        Experience Culinary Harmony: FoodFusion, Where Every Bite is a Symphony!
      </h1>
      <h4>
        FoodFusion is a culinary symphony that blends flavors and cultures,
        ensuring every bite is an explosion of taste and texture. We prioritize
        sustainability, sourcing ingredients responsibly and minimizing food
        waste. FoodFusion offers a unique gastronomic journey, where traditional
        recipes meet modern twists and global influences. We offer special
        promotions and events, offering unbeatable prices on new flavors and
        favorites. Experience culinary harmony with FoodFusion.
      </h4>
      <div className="container">
        <input
          required=""
          type="text"
          name="text"
          className="input"
          placeholder="Email"
        />
        <DefaultBtn1>SignUp</DefaultBtn1>
      </div>
      <hr />
    </div>
  );
}
