import { createCheckoutSession } from "@/lib/api";
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
  const { qty, id } = await req.json();

  const qtyInt = +qty;
  const idInt = +id;

  if (!idInt) {
    return sendBadRequest({
      message: "please make sure to provider donate id",
    });
  }

  // zod validation
  const isValid = donationSchema.safeParse({ qty: qtyInt });
  if (!isValid.success) {
    return sendBadRequest({ message: isValid.error.errors[0].message });
  }

  // make sure product does exist
  const product = getProductToDonate(idInt);
  if (!product) {
    return sendNotFound({ message: `Resource with id : ${idInt} not found` });
  }

  const total = product.amount * qtyInt;
  const [data, error] = await tryCatch(createCheckout(total));

  if (error) return sendServerError();

  return sendOk({
    message: "succuss",
    data: {
      checkoutUrl: data?.checkout_url,
    },
  });
};
