import React, { useState, useEffect } from "react";

import { useSpring, animated } from "@react-spring/web";
import "./progressbar.css";

function Progressbar({
  togglePoint,
  top,
  skill,
  skillColor,
  score,
  duration,
  bgcolor1,
  bgcolor2,
}) {
  const percentage = score;
  const [isMax, SetIsMax] = useState(false);
  const props = useSpring({
    width: isMax ? `${percentage}%` : "0",
    backgroundColor: isMax ? bgcolor1 : bgcolor2,
    config: { duration: duration },
  });

  const percentageProps = useSpring({
    number: isMax ? percentage : 0,
    config: { duration: duration },
  });

  // if (togglePoint && top && top < togglePoint) {
  //   SetIsMax(true);
  // }
  useEffect(() => {
    if (top < togglePoint) {
      SetIsMax(true);
    } else {
      SetIsMax(false);
    }
  });

  return (
    <div className="container">
      <h2 className="skill" style={{ color: skillColor }}>
        {skill}:
      </h2>
      <div className="bar-wrapper">
        <p>Beginner</p>
        <div className="bar-frame">
          <animated.div className="bar-fill" style={{ ...props }} />
          <animated.div className="indicator" style={percentageProps}>
            {percentageProps.number.to((value) => `${Math.floor(value)}%`)}
          </animated.div>
        </div>
        <p>Expert</p>
      </div>
    </div>
  );
}

export default Progressbar;
