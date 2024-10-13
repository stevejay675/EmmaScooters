'use client'
import { useEffect } from "react";

const TidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/sl5ln2gvgklxfz7kaemxjdogov8ay8kw.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup to avoid duplicates
    };
  }, []);

  return null; // No need to return any JSX as it's just embedding the script
};

export default TidioChat;
