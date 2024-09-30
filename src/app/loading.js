"use client"; // Mark as a client component
import './globals.css'

import { usePathname } from "next/navigation";

const Loading = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className='loading'>
        <h1 className="loader"></h1>
        <h3>please wait...</h3>
    </div>
  );
};

export default Loading;