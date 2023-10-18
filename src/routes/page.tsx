import { useLoaderData } from "react-router-dom";

export async function loader({ params }): Promise<string> {
  console.log(params);
  const response = await fetch("/api/fetch", {
    method: "POST",
    body: JSON.stringify({
      pageName: params.pageName,
      gameName: params.gameName,
    }),
  });
  return await response.text();
}

export default function Page() {
  const data = useLoaderData() as string;
  return (
    <>
      <>{data}</>
    </>
  );
}
