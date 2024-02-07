import { z } from "zod";
import { customAmountDonationSchema } from "./schema";

export type CustomAmountDonationSchema = z.infer<
  typeof customAmountDonationSchema
>;
