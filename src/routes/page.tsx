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
  return <>
  <WikiContent doc={data} />
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@500;700&display=swap');
      body { 
        border: 1px solid transparent;
        background: url(https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/07/stray-tips.jpg);
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .SideBar {
        backdrop-filter: blur(15px) saturate(0.4);
        background: #232b3ccc;
      }

      .contentOuter {
        backdrop-filter: blur(15px) saturate(0.4);
        background: #232b3ccc;
        margin-bottom: 50px;
      }

      .contentOuter h1 {
        padding: 4px 40px 0px 20px;
        background: 
          linear-gradient(to right, #ddd 0px, transparent 1px), 
          linear-gradient(to bottom, #ddd 0px, transparent 1px), 
          white;
        background-size: 5px 5px;
        margin: 0px 0px 0px 0px;
        font-family: oxanium, sans-serif;
        font-size: 25px;
        color: black;
        border-radius: 5px;
        box-shadow: 0px 0px 7px white;
      }
      
      .contentInner {
        color: white;
        font-family: "Oxanium", sans-serif;
        padding: 20px 40px;
      }

      .footer {
        border: 3px solid white;
        border-style: none solid solid solid;
        height: 6px;
      }
    `}</style>
  </>;
}
