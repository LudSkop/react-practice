import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  // Закрытие модального окна по нажатию клавиши Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы при открытом модальном окне
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Восстанавливаем прокрутку страницы при закрытии модального окна
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>,
    document.body,
  );
}
