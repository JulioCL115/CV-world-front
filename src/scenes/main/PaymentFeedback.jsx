import React from "react";
import { useLocation } from "react-router-dom";

function PaymentFeedback() {
  const location = useLocation();
  const feedbackType = location.pathname.split("/")[1];

  return (
    <div>
      {feedbackType === "success" && <h1>El pago se realizó con éxito</h1>}
      {feedbackType === "pending" && <h1>El pago está pendiente</h1>}
      {feedbackType === "failure" && <h1>El pago ha fallado</h1>}
    </div>
  );
}

export default PaymentFeedback;