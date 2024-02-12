import { z } from "zod";
import { customAmountDonationSchema, donationSchema } from "./schema";
import { type AxiosResponse } from "axios";

export type TCustomAmountDonation = z.infer<typeof customAmountDonationSchema>;
export type TDonation = z.infer<typeof donationSchema>;

export type TCreateCheckoutSession = (
  endpoint: "/donate/custom" | "/donate",
  data: {
    amountToDonate?: number;
    qty?: number;
    id?: number;
  }
) => Promise<AxiosResponse>;

export type TDataToDonate = {
  id: number;
  amount: number;
  name: string;
};

export type customAlertProps = { isOpen: boolean };
