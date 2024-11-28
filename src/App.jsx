import { useState, useRef } from "react";

import Header from "./components/Header";
import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";
import OrderSuccessModal from "./components/OrderSuccessModal";
import Clothes from "./components/Clothes";
import LandingPage from "./components/LandingPage";
import { fetchClothingItems, fetchOrderRequest } from "./http.js";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { fetchedData: clothingItems } = useFetch(fetchClothingItems, []);
  const [cartItems, setCartItems] = useState([]);
  const cartModalDialog = useRef();
  const checkoutModalDialog = useRef();
  const orderSuccessModalDialog = useRef();

  function handleCartItems(newCartItem) {
    const existingCartItem = cartItems.some(
      (item) => item.id === newCartItem.id
    );
    if (existingCartItem) return;
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...newCartItem, quantity: 1 },
    ]);
  }

  function handleIncreaseItem(item) {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const existingCartItem = updatedCartItems[existingItemIndex];
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
    updatedCartItems[existingItemIndex] = updatedItem;
    setCartItems(updatedCartItems);
  }

  function handleDecreaseItem(item) {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const existingCartItem = updatedCartItems[existingItemIndex];
    if (existingCartItem.quantity <= 1) {
      updatedCartItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedCartItems[existingItemIndex] = updatedItem;
    }
    setCartItems(updatedCartItems);
  }

  function handleCartModal() {
    cartModalDialog.current.open();
  }

  function handleCheckoutModal() {
    cartModalDialog.current.close();
    checkoutModalDialog.current.open();
  }

  async function handleOrderSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    
    const order = {
      customer: Object.fromEntries(fd.entries()),
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    event.target.reset();

    try {
      const response = await fetchOrderRequest(order);
      alert(response.message);

      checkoutModalDialog.current.close();
      orderSuccessModalDialog.current.open();
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    }
  }

  function handleResetCart() {
    orderSuccessModalDialog.current.close();
    setCartItems([]);
  }

  function revealAnimation() {
    var reveals = document.querySelectorAll(".clothing-item");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 40;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  revealAnimation();
  window.addEventListener("scroll", revealAnimation);

  return (
    <>
      <OrderSuccessModal
        ref={orderSuccessModalDialog}
        resetCart={handleResetCart}
      />
      <CheckoutModal
        ref={checkoutModalDialog}
        items={cartItems}
        handleSubmit={handleOrderSubmit}
      />
      <CartModal
        ref={cartModalDialog}
        items={cartItems}
        incItem={handleIncreaseItem}
        decItem={handleDecreaseItem}
        openCheckout={handleCheckoutModal}
      />
      <Header items={cartItems.length} openModal={handleCartModal} />
      <LandingPage></LandingPage>
      <Clothes clothingItems={clothingItems} openClothes={handleCartItems} />
    </>
  );
}

export default App;