import { useLoaderData } from "react-router-dom";

export async function loader({ params }:any): Promise<string> {
  const response = await fetch("/api/fetch", {
    method: "POST",
    body: JSON.stringify({
      pageName: params.pageName,
      gameName: params.gameName,
    }),
  });
  const data = await response.json();
  return data.content;
}

export default function Page() {
  const data = useLoaderData() as string;
  return (
    <>
      <>{data}</>
    </>
  );
}
 