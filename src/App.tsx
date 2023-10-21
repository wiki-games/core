import { Outlet } from "react-router-dom";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <div></div>
      <h1>Wiki-Games ~ Under Construction</h1>
      <div className="card">
        <a href="https://localhost:3000/api/fetch"> </a>
        <p>if nothing appears, go to wiki-games.com/gameName/Stray.</p>
        <p>↓ outlet is here ↓</p>
        <br></br>
        <br></br>
        <Outlet/>
      </div>
      <body>
        <Analytics />
      </body>
    </>
  );
}
