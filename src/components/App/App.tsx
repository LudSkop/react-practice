import Button from "../Button/Button";
import ClickCounter from "../ClickCounter/ClickCounter";
import { useState } from "react";
import Modal from "../Modal/Modal";
import css from "./App.module.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <h1>Main content of the page</h1>
        <button className={css.openModalButton} onClick={openModal}>
          {" "}
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>

      <Button />
      <Button />
      <Button />
      <ClickCounter value={count} onUpdate={handleClick} />
      <ClickCounter value={count} onUpdate={handleClick} />
    </>
  );
}
