import { Search } from './Search';

/**
 * @complexity O(log n)
 */
export class BinarySearch extends Search {
  public execute(): number | null {
    this.beforeExecute()

    let left = 0
    let right = this.elements!.length - 1

    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      const middleElement = this.elements![middle]

      if (middleElement === this.target!) {
        return middle
      } else if (middleElement < this.target!) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }

    return null
  }
}