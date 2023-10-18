import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
    console.log(request);
  response.status(200).json({ body: "Hello, this is TEST endpoint." });
}
