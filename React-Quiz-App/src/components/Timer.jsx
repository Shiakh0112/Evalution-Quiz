import React, { useEffect, useState } from "react";

const Timer = ({ time }) => {
  const [seconds, setSeconds] = useState(time / 1000);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  return <div>{seconds} seconds left</div>;
};

export default Timer;
