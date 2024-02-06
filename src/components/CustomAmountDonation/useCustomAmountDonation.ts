import React, { useState } from "react";

function useCustomAmountDonation() {
  const [amountToDonate, setAmountToDonate] = useState<number | string>("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === "") return setAmountToDonate("");
    if (isNaN(Number(value))) return;

    setAmountToDonate(Number(value));
  };
  return {
    amountToDonate,
    handleOnChange,
  };
}

export default useCustomAmountDonation;
