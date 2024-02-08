type postProps = (req: Request) => Promise<Response>;
import createCheckout from "@/lib/chargily";
import { sendBadRequest, sendOk, sendServerError } from "@/lib/responseHelper";
import { customAmountDonationSchema } from "@/lib/schema";
import { tryCatch } from "@/lib/utils";
export const POST: postProps = async (req) => {
  const { amountToDonate } = await req.json();

  // zod validation
  const isValid = customAmountDonationSchema.safeParse({
    amountToDonate: amountToDonate,
  });
  if (!isValid.success) {
    return sendBadRequest({ message: isValid.error.errors[0].message });
  }

  // create payment link
  const [data, error] = await tryCatch(createCheckout(amountToDonate));
  if (error) {
    return sendServerError();
  }

  return sendOk({
    message: "succuss",
    data: {
      checkoutUrl: data?.checkout_url,
    },
  });
};
