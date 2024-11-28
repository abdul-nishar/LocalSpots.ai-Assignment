import DefaultBtn1 from "./DefaultButton1";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>
        Step Into Style: Aesthetic, Where Fashion Becomes Art.
      </h1>
      <h4>
        Aesthetic is your destination for curated fashion that blends classic styles with modern trends. 
        We prioritize quality, sustainability, and individuality, offering pieces that are both timeless 
        and versatile. Our collections celebrate creativity and craftsmanship, ensuring every outfit 
        tells a story. Enjoy exclusive promotions, seasonal trends, and unbeatable prices on wardrobe 
        essentials and statement pieces. Redefine your style with Aesthetic, where fashion is an art form.
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
