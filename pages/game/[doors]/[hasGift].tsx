import styles from "../../../styles/game.module.css";
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoor, updateDoor } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();

  const [doors, setDoors] = useState(createDoor(10, 2));
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createDoor(doors, hasGift));
  }, [router?.query]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    const validDoors = doors > 3 && doors <= 100;
    const validHasGift = hasGift <= doors && hasGift > 0;
    setValid(validDoors && validHasGift);
  }, [doors, router?.query]);

  function renderDoor() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoor(doors, newDoor))}
        />
      );
    });
  }
  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoor() : <h2>Valores Invalidos</h2>}
      </div>
      <div className={styles.buttons}>
        <button>
          <Link href="/">Reiniciar jogo</Link>
        </button>
      </div>
    </div>
  );
}
