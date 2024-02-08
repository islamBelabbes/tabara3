import { minimumAmountToDonate } from "@/constants";
import { z } from "zod";

export const customAmountDonationSchema = z.object({
  amountToDonate: z.coerce
    .number({
      invalid_type_error: "المرجو ادخال مبلغ صحيح",
    })
    .min(minimumAmountToDonate, {
      message: "اقل قيمة يمكن التبرع بها هي 500 (50الف)",
    })
    .max(1000000, {
      message: "اعلى قيمة يمكن التبرع بها هي 1000000 (100مليون)",
    }),
});

export const donationSchema = z.object({
  qty: z.coerce
    .number({
      invalid_type_error: "المرجو ادخال كمية صحيحة",
    })
    .min(1, { message: "اقل كمية يمكن التبرع بها هي 1." }),
});
