type postProps = (req: Request) => Promise<Response>;

export const POST: postProps = async (req) => {
  return Response.json({ ok: true });
};
