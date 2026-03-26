import { useState } from "react";
import CSS from "./Button.module.css";

export default function Button() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button className={CSS.button} onClick={handleClick}>
      Clicked: {clicks}
    </button>
  );
}
