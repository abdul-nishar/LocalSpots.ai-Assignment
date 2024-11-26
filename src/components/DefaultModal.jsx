import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";

const DefaultModal = forwardRef(function DefaultModal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default DefaultModal;
