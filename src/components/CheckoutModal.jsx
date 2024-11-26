import { forwardRef } from "react";

import DefaultModal from "./DefaultModal";
import DefaultBtn1 from "./DefaultButton1";
import DefaultBtn2 from "./DefaultButton2";

const CheckoutModal = forwardRef(function CheckoutModal(
  { items, handleSubmit },
  ref
) {
  return (
    <DefaultModal ref={ref}>
      <form onSubmit={handleSubmit} id="checkout-form">
        <h2>Checkout</h2>
        <p>
          Total Amount: $
          {items
            .reduce(
              (accumulator, curItem) =>
                accumulator + Number(curItem.price * curItem.quantity),
              0
            )
            .toFixed(2)}
        </p>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div className="control">
          <label htmlFor="email">E-mail Address</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input id="street" type="text" name="street" required />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input
              id="postal-code"
              type="number"
              name="postal-code"
              required
              minLength="4"
              maxLength="10"
            />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input id="city" type="text" name="city" required />
          </div>
        </div>
        <div className="modal-actions">
          <DefaultBtn2
            onClick={(event) => {
              const form = document.getElementById("checkout-form");
              form.reset();
              event.preventDefault();
              ref.current.close();
            }}
          >
            Close
          </DefaultBtn2>
          <DefaultBtn1 type="submit">Submit Order</DefaultBtn1>
        </div>
      </form>
    </DefaultModal>
  );
});

export default CheckoutModal;
