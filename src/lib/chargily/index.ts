import { Mode, SupportedCurrency, type checkoutProps } from "./type";

const checkoutConstantParams: Omit<checkoutProps, "amount"> = {
  currency: SupportedCurrency.dzd,
  payment_method: Mode.EDAHABIA,
  success_url: "http://localhost:3001",
  failure_url: "http://localhost:3001",
} as const;

const createCheckout = async (amount: number) => {
  const chargilyCheckoutUrl = "https://pay.chargily.net/test/api/v2/checkouts";
  const body: checkoutProps = {
    amount,
    ...checkoutConstantParams,
  };

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CHARGILY_APP_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const order = await fetch(chargilyCheckoutUrl, options);
    const orderJson = await order.json();

    return orderJson;
  } catch (error) {
    throw error;
  }
};

export default createCheckout;
