import { useState } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Wiki-Games ~ Under Construction</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>yes</p>
      </div>
      <p className="read-the-docs">testtext</p>
      <body>
        <Analytics />
      </body>
    </>
  );
}
