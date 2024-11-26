import { forwardRef } from "react";

import DefaultModal from "./DefaultModal";
import DefaultBtn1 from "./DefaultButton1";

const OrderSuccessModal = forwardRef(function OrderSuccessModal(
  { resetCart },
  ref
) {
  return (
    <DefaultModal ref={ref}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <DefaultBtn1 onClick={resetCart}>Okay</DefaultBtn1>
      </div>
    </DefaultModal>
  );
});

export default OrderSuccessModal;
