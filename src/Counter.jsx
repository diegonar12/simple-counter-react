import { useState, useEffect } from "react";
import "./styles.css";

const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <div className="container">
        <i className="fa-regular fa-clock"></i>
        <div className="digit">{Math.floor(seconds / 100000) % 10}</div>
        <div className="digit">{Math.floor(seconds / 10000) % 10}</div>
        <div className="digit">{Math.floor(seconds / 1000) % 10}</div>
        <div className="digit">{Math.floor(seconds / 100) % 10}</div>
        <div className="digit">{Math.floor(seconds / 10) % 10}</div>
        <div className="digit">{seconds % 10}</div>
      </div>
    </div>
  );
};

export default Counter;
