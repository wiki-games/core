import { Outlet } from "react-router-dom";
import "./ContentPage.css";

export default function ContentPage() {
  return (
    <div className="content">
      <h1>Wiki-Games ~ Under Construction</h1>
      <div className="card">
        <p>if nothing appears, go to wiki-games.com/Stray/Main.</p>
        <p>by the way, NEW FEATURE! Go to the edit field in the sidebar to make your own page!</p>
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
