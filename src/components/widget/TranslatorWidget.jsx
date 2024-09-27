"use client";
import '../../app/globals.css'
import React, { useEffect } from "react";

const TranslatorWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <div>
      <div
        className="elfsight-app-2eea294f-9f93-4609-82aa-8761f7d0dfbc"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default TranslatorWidget;
