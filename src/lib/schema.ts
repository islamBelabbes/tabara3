import { z } from "zod";

export const customAmountDonationSchema = z.object({
  amountToDonate: z.coerce
    .number({
      invalid_type_error: "المرجو الدخال مبلغ صحيح",
      required_error: "sd",
    })
    .min(500, { message: "اقل قيمة يمكن التبرع بها هي 500 (50الف)" })
    .max(1000000, {
      message: "اعلى قيمة يمكن التبرع بها هي 1000000 (100مليون)",
    }),
});
