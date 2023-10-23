import "./App.css";
import SideBar from "./components/SideBar.tsx"
import { Analytics } from "@vercel/analytics/react";
import TopBar from "./components/TopBar.tsx";
import ContentPage from "./components/ContentPage.tsx";

export default function App() {
  return (
    <>
      <TopBar/> 
      <SideBar/>
      <ContentPage/>
      <Analytics />
    </>
  );
}
