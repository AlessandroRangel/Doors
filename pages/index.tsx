import styles from "../styles/form.module.css";
import Card from "../components/Card";
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [doors, setDoors] = useState(3);
  const [withGift, setWithGift] = useState(2);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Número de Portas"
            minValue={3}
            maxValue={100}
            value={doors}
            onChange={(value) => setDoors(value)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com Presente"
            minValue={1}
            maxValue={100}
            value={withGift}
            onChange={(gift) => setWithGift(gift)}
          />
        </Card>

        <Card bgColor="#28a085">
          <Link
            href={`/game/${doors}/${withGift}`}
            className={styles.link}
            passHref
          >
            <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
