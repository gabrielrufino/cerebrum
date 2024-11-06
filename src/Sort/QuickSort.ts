import { Sort } from './Sort';

/**
 * @complexity O(n log n)
 */
export class QuickSort extends Sort {
  public execute(): Array<number> {
    if (this.numbers.length <= 1) {
      return [...this.numbers]
    }

    const pivotIndex = Math.floor(this.numbers.length / 2);
    const left: number[] = []
    const right: number[] = []

    for (let i = 0; i < this.numbers.length; i++) {
      if (i === pivotIndex) {
        continue
      } else if (this.numbers[i] <= this.numbers[pivotIndex]) {
        left.push(this.numbers[i])
      } else {
        right.push(this.numbers[i])
      }
    }

    return [...new QuickSort(left).execute(), this.numbers[pivotIndex], ...new QuickSort(right).execute()]
  }
}
