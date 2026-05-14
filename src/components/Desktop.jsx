import React from "react";
import TaskBar from "./TaskBar";
import wallpaper from "../assets/wallpaper.jpg"
const Desktop = () => {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      {/* Wallpaper Area */}
      <main
        className="
          flex-1
          bg-cover
          bg-center
          relative
        "
        style={{
          backgroundImage:
            `url(${wallpaper})`,
        }}
      ></main>

      {/* Taskbar */}
      <TaskBar />
    </div>
  );
};

export default Desktop;
