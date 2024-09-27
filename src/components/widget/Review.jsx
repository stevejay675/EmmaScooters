"use client"
import React, { useEffect } from "react";

const Eeview = () => {
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
      <div class="elfsight-app-69c319c5-9105-4ae1-bb92-1b5b77c52568" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Eeview;
