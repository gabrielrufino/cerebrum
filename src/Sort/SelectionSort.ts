export class SelectionSort {
  private constructor() {}
  static execute(numbers: Array<number>): Array<number> {
    for (let i = 0; i < numbers.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
          minIndex = j;
        }
      }

      [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
    }

    return numbers;
  }
}
