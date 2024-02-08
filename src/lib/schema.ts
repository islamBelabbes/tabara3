import { TreeAmount } from "@/constants";
import { z } from "zod";

export const customAmountDonationSchema = z.object({
  amountToDonate: z.coerce
    .number({
      invalid_type_error: "المرجو ادخال مبلغ صحيح",
    })
    .min(500, { message: "اقل قيمة يمكن التبرع بها هي 500 (50الف)" })
    .max(1000000, {
      message: "اعلى قيمة يمكن التبرع بها هي 1000000 (100مليون)",
    }),
});

export const treeDonationSchema = z.object({
  treeQty: z.coerce
    .number({
      invalid_type_error: "المرجو ادخال كمية صحيحة",
    })
    .min(1, { message: "اقل شجرة يمكن التبرع بها هي شجرة واحدة." })
    .max(1000000 / TreeAmount, {
      message: `اكثر عدد من الاشجار يمكن التبرع به هو ${1000000 / TreeAmount}`,
    }),
});
