import { Sort } from './Sort';

export class SelectionSort extends Sort {
  public execute(): Array<number> {
    for (let i = 0; i < this.numbers.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.numbers.length; j++) {
        if (this.numbers[j] < this.numbers[minIndex]) {
          minIndex = j;
        }
      }

      [this.numbers[i], this.numbers[minIndex]] = [this.numbers[minIndex], this.numbers[i]];
    }

    return [...this.numbers];
  }
}
