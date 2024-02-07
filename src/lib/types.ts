import { z } from "zod";
import { customAmountDonationSchema } from "./schema";

export type CustomAmountDonation = z.infer<typeof customAmountDonationSchema>;
