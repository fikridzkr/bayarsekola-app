import React, { useState } from "react";
import ConfirmPayment from "./Checkout/ConfirmPayment";
import FinishPayment from "./Checkout/FinishPayment";
import SelectPayment from "./Checkout/SelectPayment";

const Payment = ({ user_id }) => {
  const [formStep, setFormStep] = useState(0);
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  return (
    <>
      {formStep === 0 && (
        <SelectPayment user_id={user_id} completeFormStep={completeFormStep} />
      )}
      {formStep === 1 && <ConfirmPayment />}
      {formStep === 2 && <FinishPayment />}
    </>
  );
};

export default Payment;
