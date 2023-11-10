import { useLoaderData } from "react-router-dom";
import { DocumentNode, parseWikitext } from "wikimark";
import WikiContent from "../components/WikiContent.tsx";

export async function loader({ params }: any): Promise<DocumentNode> {
  const response = await fetch("/api/fetch", {
    method: "POST",
    body: JSON.stringify({
      pageName: params.pageName,
      gameName: params.gameName,
    }),
  });
  const data = await response.json();
  const parsed = parseWikitext(data.content, params.pageName);
  return parsed;
}

export default function Page() {
  const data = useLoaderData() as DocumentNode;
  return <WikiContent doc={data} />;
}
