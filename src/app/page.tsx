"use client";

import { useState, useEffect } from "react";
import About from "./components/about";
import Resume from "./components/resume";
import Project from "./components/project";
import Achievement from "./components/achievement";

type Tab = "About" | "Resume" | "Project" | "Achievement";

export default function Home() {
  const [tab, setTab] = useState<Tab>("About");
  const [currentTab, setCurrentTab] = useState<Tab>("About");
  const [animate, setAnimate] = useState(false);

  const renderContent = () => {
    switch (currentTab) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Project":
        return <Project />;
      case "Achievement":
        return <Achievement />;
    }
  };

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => {
      setCurrentTab(tab);
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, [tab]);

  return (
    <div className="flex flex-col bg-gray-900 border border-gray-700 rounded-md p-5 text-white w-full">
      {/* Header and Menu */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        {/* Title */}
        <div>
          <h1 className="font-bold text-3xl">{tab}</h1>
          <hr className="border-t-4 border-blue-500 w-28 rounded-2xl mt-1" />
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 sm:gap-4 scrollbar-hide">
          {["About", "Resume", "Project", "Achievement"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item as Tab)}
              className={`whitespace-nowrap hover:text-blue-500 transition-colors duration-300 p-2 ${
                tab === item ? "font-bold text-blue-500" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className={`mt-3 transition-all duration-500 ease-out ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}
