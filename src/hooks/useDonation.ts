import { createCheckoutSession } from "@/lib/api";
import { donationSchema } from "@/lib/schema";
import { TDonation } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export type TUseDonation = ReturnType<typeof useDonation>;
function useDonation(amount: number) {
  const { register, handleSubmit, formState, watch, setValue, getValues } =
    useForm<TDonation & { total: number | string }>({
      resolver: zodResolver(donationSchema.omit({ id: true })),
    });
  const { mutateAsync, isSuccess, isPending } = useMutation({
    mutationFn: (data: TDonation) => {
      return createCheckoutSession("/donate/custom", {
        amountToDonate: data.qty * amount,
      });
    },
  });

  const onSubmit = async (data: TDonation) => {
    const res = await toast.promise(mutateAsync(data), {
      error: "حدث خطأ ما",
      pending: "جاري انشاء جلسة",
      success: "تم انشاء الجلسة سيتم توجيهك قريبا...",
    });

    window.location.href = res.data.data.checkoutUrl;
  };

  const watchQty = watch("qty");
  const watchTotal = watch("total");
  useEffect(() => {
    if (!isNaN(Number(watchQty))) {
      setValue("total", watchQty * amount === 0 ? "" : watchQty * amount);
    }
  }, [watchQty]);

  return {
    register,
    handleSubmit,
    formState,
    onSubmit,
    isSuccess,
    isPending,
    total: watchTotal,
  };
}

export default useDonation;
