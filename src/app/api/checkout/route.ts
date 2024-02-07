type postProps = (req: Request) => Promise<Response>;
import createCheckout from "@/lib/chargily";
export const POST: postProps = async (req) => {
  const { amount } = await req.json();

  if (!amount && isNaN(Number(amount))) {
    return Response.json(
      {
        message: "please provider a valid amount (int)",
        succuss: false,
      },
      {
        status: 400,
      }
    );
  }

  try {
    const order = await createCheckout(amount);

    return Response.json(
      {
        succuss: true,
        data: {
          checkourUrl: order?.checkout_url,
        },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return Response.json(
      {
        succuss: false,
      },
      {
        status: 500,
      }
    );
  }
};
