import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 1920) {
      let timer = setTimeout(() => {
        setPercentage((prev) => prev + 192);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [percentage]);
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          height: "80px",
          width: "1920px",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            height: "80px",
            width: `${percentage}px`,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
