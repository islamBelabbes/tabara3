import createCheckout from "@/lib/chargily";
import {
  sendBadRequest,
  sendNotFound,
  sendOk,
  sendServerError,
} from "@/lib/responseHelper";
import { donationSchema } from "@/lib/schema";
import { getProductToDonate, tryCatch } from "@/lib/utils";

type postProps = (req: Request) => Promise<Response>;

export const POST: postProps = async (req) => {
  const body = await req.json();

  // zod validation
  const isValid = donationSchema.safeParse(body);
  if (!isValid.success) {
    return sendBadRequest({ message: isValid.error.errors[0].message });
  }

  // get values
  const { id, qty } = isValid?.data;

  // make sure product does exist
  const product = getProductToDonate(id);
  if (!product) {
    return sendNotFound({ message: `Resource with id : ${id} not found` });
  }

  const total = product.amount * qty;
  const [data, error] = await tryCatch(createCheckout(total));

  if (error) return sendServerError();

  return sendOk({
    message: "succuss",
    data: {
      checkoutUrl: data?.checkout_url,
    },
  });
};
