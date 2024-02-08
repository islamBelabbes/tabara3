import { z } from "zod";
import { customAmountDonationSchema, treeDonationSchema } from "./schema";
import { type AxiosResponse } from "axios";

export type TCustomAmountDonation = z.infer<typeof customAmountDonationSchema>;
export type TTreeDonation = z.infer<typeof treeDonationSchema>;

export type TCreateCheckoutSession = (
  endpoint: "/donate/custom" | "/donate",
  data: { amountToDonate: number } | { qty: number }
) => Promise<AxiosResponse>;
