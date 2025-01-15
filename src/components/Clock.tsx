import { useState, useEffect } from "react";

export const Clock = () => {
  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Ho_Chi_Minh",
    });

  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(formatTime(new Date()));
    };

    // Update the clock every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div className="whitespace-nowrap text-sm">{currentTime}</div>;
};
