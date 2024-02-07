import { createCheckoutSession } from "@/lib/api";
import { customAmountDonationSchema } from "@/lib/schema";
import { CustomAmountDonation } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export type TUseCustomAmountDonation = ReturnType<
  typeof useCustomAmountDonation
>;

function useCustomAmountDonation() {
  const { register, handleSubmit, formState } = useForm<CustomAmountDonation>({
    resolver: zodResolver(customAmountDonationSchema),
  });
  const { mutateAsync, isSuccess, isPending } = useMutation({
    mutationFn: (data: CustomAmountDonation) =>
      createCheckoutSession(data.amountToDonate),
  });

  const onSubmit = async (data: CustomAmountDonation) => {
    const res = await toast.promise(mutateAsync(data), {
      error: "حدث خطأ ما",
      pending: "جاري انشاء جلسة",
      success: "تم انشاء الجلسة سيتم توجيهك قريبا...",
    });

    window.location.href = res.data.data.checkoutUrl;
  };

  return { register, handleSubmit, formState, onSubmit, isSuccess, isPending };
}

export default useCustomAmountDonation;
