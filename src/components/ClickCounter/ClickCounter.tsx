import styles from "./ClickCounter.module.css";

interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}
export default function ClickCounter({ value, onUpdate }: ClickCounterProps) {
  return (
    <button className={styles.button} onClick={onUpdate}>
      {" "}
      CLIKED: {value}
    </button>
  );
}
