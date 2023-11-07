import { sql } from "@vercel/postgres";
import type { VercelRequest, VercelResponse } from "@vercel/node";

interface Page {
  title: string;
  content: string;
  author: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const page: Page = req.body;

    const result = await sql`
        INSERT INTO Pages (
            id, timestamp, title, game_id, content, author
        ) 
        VALUES (
            uuid_generate_v4(), 
            CURRENT_TIMESTAMP,
            ${page.title}, 
            uuid_generate_v4(), 
            ${page.content}, 
            ${page.author}
        )`;

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Record inserted successfully." });
    } else {
      res.status(500).json({ error: "Error inserting record." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
