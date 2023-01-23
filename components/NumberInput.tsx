import styles from "../styles/NumberInput.module.css";

interface NumberInput {
  text: string;
  value: number;
  minValue: number;
  maxValue: number;
  onChange: (newValue: number) => void;
}

export default function NumberInput(props: NumberInput) {
  const dec = () => props.onChange(props.value - 1);
  const inc = () => props.onChange(props.value + 1);
  function hundleClickDec() {
    if (props.value > props.minValue) {
      dec();
    } else {
      alert("não é possivel diminuir mais");
    }
  }

  function hundleClickInc() {
    if (props.value < props.maxValue) {
      inc();
    } else {
      alert("não é possivel aumentar mais");
    }
  }
  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={hundleClickDec}>
          -
        </button>
        <button className={styles.btn} onClick={hundleClickInc}>
          +
        </button>
      </div>
    </div>
  );
}
