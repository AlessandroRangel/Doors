export default class ModelDoor {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(number: number, hasGift = false, selected = false, open = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get open() {
    return this.#open;
  }

  deselect() {
    const selected = false;
    return new ModelDoor(this.number, this.#hasGift, selected, this.open);
  }
  changeSelection() {
    const selected = !this.selected;
    return new ModelDoor(this.number, this.#hasGift, selected, this.open);
  }

  opened() {
    const opened = true;
    return new ModelDoor(this.number, this.#hasGift, this.selected, opened);
  }
}
