import { sql } from "@vercel/postgres";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const body = JSON.parse(req.body);
    const pageName = body.pageName;
    const gameName = body.gameName;
    const pageResult = await sql`SELECT * FROM pages WHERE name = ${pageName} AND game_name = ${gameName}`;
    /* const gameresult = await sql`SELECT * FROM games WHERE Title = {gameName}`; */
    res.status(200).json(pageResult.rows[0]);
  } catch (error: any) {
    const message = error.hasOwnProperty("message")? error.message : error.toString();
    res.status(500).json({ error: message });
  }
}
