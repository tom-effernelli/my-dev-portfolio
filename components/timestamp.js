"use client";
import { useState, useEffect } from "react";

const Timestamp = ({ className = "relative leading-[121.1%] font-light lg:text-[22px]" }) => {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const raw = Date.now().toString();
    setTimestamp(raw.length > 16 ? raw.slice(-16) : raw.padStart(16, "0"));
  }, []);

  return <div className={className}>{timestamp}</div>;
};

export default Timestamp;
