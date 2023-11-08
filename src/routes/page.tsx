import { useLoaderData } from "react-router-dom";
import { parseWikitext } from "wikimark";

export async function loader({ params }: any): Promise<string> {
  const response = await fetch("/api/fetch", {
    method: "POST",
    body: JSON.stringify({
      pageName: params.pageName,
      gameName: params.gameName,
    }),
  });
  const data = await response.json();
  try {
    const parsed = parseWikitext(data.content);
    console.log(parsed);
    console.log(parsed.toDebugTree());
  } catch (error) {
    console.log(error);
  }
  return data.content;
}

export default function Page() {
  const data = useLoaderData();
  return (
    <>
      <>{data}</>
    </>
  );
}
