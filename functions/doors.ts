import ModelDoor from "../models/ModelDoor";

export function createDoor(length: number, withGift: number): ModelDoor[] {
  return Array.from({ length }, (_, i) => {
    const number = i + 1;
    const hasGift = number === withGift;
    return new ModelDoor(number, hasGift);
  });
}

export function updateDoor(doors: ModelDoor[], modifiedDoor: ModelDoor) {
  return doors.map((actualDoor) => {
    const equalToModifiedDoor = actualDoor.number === modifiedDoor.number;
    if (equalToModifiedDoor) {
      return modifiedDoor;
    } else {
      return modifiedDoor.open ? actualDoor : actualDoor.deselect();
    }
  });
}
