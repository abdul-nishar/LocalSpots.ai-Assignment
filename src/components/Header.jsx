import DefaultBtn1 from "./DefaultButton1";

export default function Header({ openModal, items }) {
  return (
    <main id="main-header">
      <title id="title">
        <img src="logo.jpeg" />
        <h1>AESTHETIC</h1>
      </title>
      <DefaultBtn1 onClick={openModal} className="cart-button">
        <img
            src="/ShoppingCartIcon.svg" // Path to your SVG
            alt="Cart Icon"
            className="cart-icon"
          />
        Cart({items})
      </DefaultBtn1>
    </main>
  );
}
