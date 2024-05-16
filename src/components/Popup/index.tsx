import React, { useEffect, useState } from "react";
import "./styles.scss";

interface PopupProps {
  message: string;
  show: boolean;
}

const Popup: React.FC<PopupProps> = (props) => {
  const [animationState, setAnimationState] = useState("hidden");

  useEffect(() => {
    if (props.show) {
      setAnimationState("showing");
      const timeout = setTimeout(() => {
        setAnimationState("hiding");
      }, 3000);
      return () => clearTimeout(timeout);
    } else {
      setAnimationState("hidden");
    }
  }, [props.show]);

  useEffect(() => {
    if (animationState === "hiding") {
      const timeout = setTimeout(() => {
        setAnimationState("hidden");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [animationState]);

  return <div className={`popup ${animationState}`}>{props.message}</div>;
};

export default Popup;
