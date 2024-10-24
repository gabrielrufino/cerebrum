import { Sort } from './Sort';

/**
 * @complexity O(n^2)
 */
export class BubbleSort extends Sort {
  public execute(): Array<number> {
    for (let i = 0; i < this.numbers.length - 1; i++) {
      for (let j = 0; j < this.numbers.length - i - 1; j++) {
        if (this.numbers[j] > this.numbers[j + 1]) {
          [this.numbers[j], this.numbers[j + 1]] = [this.numbers[j + 1], this.numbers[j]];
        }
      }
    }

    return [...this.numbers];
  }
}
