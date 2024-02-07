import axios, { AxiosResponse } from "axios";

type CreateCheckoutSession = (
  amountToDonate?: number
) => Promise<AxiosResponse>;

export const createCheckoutSession: CreateCheckoutSession = async (
  amountToDonate
) => {
  const res = await axios.post("/api/checkout", { amountToDonate });
  return res;
};
