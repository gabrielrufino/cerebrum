import { Sort } from './Sort';

export class MergeSort extends Sort {
  public execute(): Array<number> {
    if (this.numbers.length <= 1) {
      return [...this.numbers]
    }

    const middle = Math.floor(this.numbers.length / 2)
    const left = this.numbers.slice(0, middle)
    const right = this.numbers.slice(middle)

    return this.merge(new MergeSort(left).execute(), new MergeSort(right).execute())
  }

  private merge(left: number[], right: number[]): number[] {
    const result: number[] = []

    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex])
        leftIndex += 1
      } else {
        result.push(right[rightIndex])
        rightIndex += 1
      }
    }

    return [
      ...result,
      ...left.slice(leftIndex),
      ...right.slice(rightIndex)
    ]
  }
}