import { useLocation } from "react-router-dom";

function PaymentFeedback() {
    const location = useLocation();
    const isSuccess = location.pathname === "/success";
    const isPending = location.pathname === "/pending";
    const isFailure = location.pathname === "/failure";

    return (
        <div>
            {
                isSuccess ? <h1>El pago se realizó con éxito</h1> : null
            }
            {
                isPending ? <h1>El pago está pendiente</h1> : null
            }
            {
                isFailure ? <h1>El pago ha fallado</h1> : null
            }
        </div>
    )
};

export default PaymentFeedback;