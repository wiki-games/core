import "./App.css";
import SideBar from "./components/SideBar.tsx";
import { Analytics } from "@vercel/analytics/react";
import { TopBar } from "./components/TopBar.tsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <TopBar />
      <SideBar />
      <Outlet />
      <Analytics />
    </>
  );
}
