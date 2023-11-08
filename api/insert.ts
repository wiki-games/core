import { sql } from "@vercel/postgres";
import type { VercelRequest, VercelResponse } from "@vercel/node";

interface Page {
  name: string;
  content: string;
  game: string;
  // type: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const data: Page = req.body;
    const page_name = data.name;
    const game_name = data.game;
    const page_content = data.content;

    const query_game = await sql`SELECT id FROM games WHERE name = ${game_name}`;
    if (query_game.rowCount === 0) {
      res.status(404).json({ error: `Game "${game_name}" not found`});
      return;
    }
    const game_id = query_game.rows[0].id;

    const result = await sql`
      INSERT INTO pages(name, game_id, game_name, content, content_type)
      VALUES (${page_name}, ${game_id}, ${game_name}, ${page_content}, 'wikitext')
    `;

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Record inserted successfully." });
    } else {
      res.status(500).json({ error: "Error inserting record." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
