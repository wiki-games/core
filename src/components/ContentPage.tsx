import { Outlet } from "react-router-dom";
import "./ContentPage.css";

export default function ContentPage() {
  return (
    <div className="content">
      <h1>Wiki-Games ~ Under Construction</h1>
      <div className="card">
        <p>if nothing appears, go to wiki-games.com/gameName/Stray.</p>
        <p>↓ outlet is here ↓</p>
        <br />
        <br />
        <div className="text">
        <Outlet />
        </div>
      </div>
    </div>
  );
}
