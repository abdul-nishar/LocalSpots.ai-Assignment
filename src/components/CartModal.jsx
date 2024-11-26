import { forwardRef } from "react";

import DefaultModal from "./DefaultModal";
import DefaultBtn1 from "./DefaultButton1";
import DefaultBtn2 from "./DefaultButton2";

const CartModal = forwardRef(function CartModal(
  { items, incItem, decItem, openCheckout },
  ref
) {
  return (
    <DefaultModal ref={ref}>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} - {item.quantity} x ${item.price}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => decItem(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incItem(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        {items.length === 0 ? (
          <>
            <h3 className="empty-cart">Please add some items in the cart!</h3>
            <div className="modal-actions">
              <DefaultBtn1 onClick={() => ref.current.close()}>
                Close
              </DefaultBtn1>
            </div>
          </>
        ) : (
          <>
            <div className="cart-total">
              $
              {items
                .reduce(
                  (accumulator, curItem) =>
                    accumulator + Number(curItem.price * curItem.quantity),
                  0
                )
                .toFixed(2)}
            </div>
            <div className="modal-actions">
              <DefaultBtn2 onClick={() => ref.current.close()}>
                Close
              </DefaultBtn2>
              <DefaultBtn1 onClick={openCheckout}>Go to Checkout</DefaultBtn1>
            </div>
          </>
        )}
      </div>
    </DefaultModal>
  );
});

export default CartModal;
