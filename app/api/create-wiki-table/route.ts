import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const result = await sql`CREATE TABLE Page (PageName varchar(255), LEN int, Converted );`;
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}