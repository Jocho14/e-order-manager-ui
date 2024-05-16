import React, { useState } from "react";

import Popup from "../Popup";

interface EnhancedButtonProps {
  className: string;
  label: string;
  message: string;
  onClick?: () => void;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    if (props.onClick) props.onClick();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div>
      <button onClick={handleClick} className={props.className}>
        {props.label}
      </button>
      <Popup message={props.message} show={showPopup} />
    </div>
  );
};

export default EnhancedButton;
