import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>whoopsie</h1>
      <p>something went wrong</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
} 