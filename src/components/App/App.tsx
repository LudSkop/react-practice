import Button from "../Button/Button";
import ClickCounter from "../ClickCounter/ClickCounter";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
  };
  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button />
      <Button />
      <Button />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>
      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
    </>
  );
}
