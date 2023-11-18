import { useState } from "react";
import "./SideBar.css"; // Import the CSS file

enum SidebarMode {
  MODE_1 = "Mode 1",
  MODE_2 = "Mode 2",
  MODE_3 = "Mode 3",
}

export default function SideBar() {
  const [currentMode, setCurrentMode] = useState<SidebarMode>(
    SidebarMode.MODE_1
  );

  const handleModeChange = (mode: SidebarMode) => {
    setCurrentMode(mode);
  };

  return (
    <div className="SideBar">
      <div className="ModeSelector">
        <button
          className={currentMode === SidebarMode.MODE_1 ? "active" : ""}
          onClick={() => handleModeChange(SidebarMode.MODE_1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="36"
            height="36"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </button>
        <button
          className={currentMode === SidebarMode.MODE_2 ? "active" : ""}
          onClick={() => handleModeChange(SidebarMode.MODE_2)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="36"
            height="36"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
        <button
          className={currentMode === SidebarMode.MODE_3 ? "active" : ""}
          onClick={() => handleModeChange(SidebarMode.MODE_3)}
        >
          edit
        </button>
      </div>
      {/* Render the content for each mode based on the currentMode */}
      {currentMode === SidebarMode.MODE_1 && (
        <a href="/Stray/Main">link to stray page</a>
      )}
      {currentMode === SidebarMode.MODE_2 && (
        <a href="/gameName/Ginger Cat (Stray)">link to cat page</a>
      )}
      {currentMode === SidebarMode.MODE_3 && (
        <a href="/new">CREATE NEW PAGE!!! (new feature)</a>
      )}
    </div>
  );
}
