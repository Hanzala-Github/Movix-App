import React, { useState } from "react";
import "./style.scss";

function SwitchTabs({ data, onTabChange }) {
  const [selected, setselected] = useState(0);
  const [left, setLeft] = useState(0);

  const avtiveTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setselected(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
           key={index} 
           className={`tabItem ${selected === index ? "active" : ""}`} onClick={() => avtiveTab(tab , index)}
           >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
}

export default SwitchTabs;
