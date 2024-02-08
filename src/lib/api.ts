import axios from "axios";
import { type TCreateCheckoutSession } from "./types";

export const createCheckoutSession: TCreateCheckoutSession = async (
  endpoint,
  data
) => {
  const res = await axios.post(`/api/${endpoint}`, data);
  return res;
};
