import { customAmountDonationSchema } from "@/lib/schema";
import { CustomAmountDonationSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";

export type UseCustomAmountDonation = {
  register: UseFormRegister<CustomAmountDonationSchema>;
  handleSubmit: UseFormHandleSubmit<CustomAmountDonationSchema>;
  formState: FormState<CustomAmountDonationSchema>;
  onSubmit: (data: FieldValues) => Promise<void>;
};

function useCustomAmountDonation() {
  const { register, handleSubmit, formState } =
    useForm<CustomAmountDonationSchema>({
      resolver: zodResolver(customAmountDonationSchema),
    });

  const onSubmit = async (data: FieldValues) => {
    await new Promise<FieldValues>((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  return { register, handleSubmit, formState, onSubmit };
}

export default useCustomAmountDonation;
