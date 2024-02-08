import createCheckout from "@/lib/chargily";
import { sendBadRequest, sendOk, sendServerError } from "@/lib/responseHelper";
import { customAmountDonationSchema } from "@/lib/schema";
import { tryCatch } from "@/lib/utils";
type postProps = (req: Request) => Promise<Response>;
export const POST: postProps = async (req) => {
  const body = await req.json();

  // zod validation
  const isValid = customAmountDonationSchema.safeParse(body);
  if (!isValid.success) {
    return sendBadRequest({ message: isValid.error.errors[0].message });
  }

  // get values
  const { amountToDonate } = isValid.data;

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
