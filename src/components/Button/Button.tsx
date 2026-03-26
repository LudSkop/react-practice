import { useState } from "react";
import styles from "./Button.module.css";

export default function Button() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Clicked: {clicks}
    </button>
  );
}
