export class TwoSum {
  constructor (
    public readonly numbers: number[],
    public readonly target: number
  ) {}

  public execute (): [number, number] | null {
    let left = 0;
    let right = this.numbers.length - 1;

    while (left < right) {
      const sum = this.numbers[left] + this.numbers[right];

      if (sum === this.target) {
        return [left, right];
      } else if (sum < this.target) {
        left++;
      } else {
        right--;
      }
    }

    return null;
  }
}
