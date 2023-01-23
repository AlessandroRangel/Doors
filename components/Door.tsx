import styles from "../styles/Door.module.css";
import ModelDoor from "../models/ModelDoor";
import Gift from "../components/Gift";
interface DoorProps {
  value: ModelDoor;
  onChange: (newDoor: ModelDoor) => void;
}
export default function Door(props: DoorProps) {
  const door = props.value;
  const isSelected = door.selected && !door.open ? styles.selected : "";
  const changeSelection = (e) => props.onChange(door.changeSelection());
  const open = (e) => {
    e.stopPropagation();
    props.onChange(door.opened());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.knob} onClick={open}></div>
      </div>
    );
  }
  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${isSelected}`}>
        {!door.open ? renderDoor() : door.hasGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
