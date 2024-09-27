"use client"
import React, { useEffect } from "react";

const TelegramChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when the component unmounts
    };
  }, []);  // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div
        className="elfsight-app-c46dbbca-b0c9-48c6-bf77-f821303e83e7"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default TelegramChatWidget;
