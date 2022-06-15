import React, { useState } from "react";
import "./SchedulesHome.css";

function ScheduleHome() {
  const now = new Date();
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const item = new Date(now.getTime() + 24 * 60 * 60 * 1000 * i);
    dates.push(item);
  }
  const weekday = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"];

  const [active, setActive] = useState(0);
  return (
    <div className="home-container">
      <div className="home-schedules">
        {dates.map((date, index) => {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const dayOfWeek = weekday[date.getDay()];
          return (
            <span
              key={index}
              onClick={() => setActive(index)}
              className={`home-container text-muted home-date ${
                active === index ? "active" : ""
              }`}
            >
              <span>
                {day}/{month}
                <br />
                <span>{dayOfWeek}</span>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ScheduleHome;
