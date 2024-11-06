/**
 * @complexity O(2^n)
 */
export class Fibonacci {
  constructor (private readonly n: number) {
    if (n < 1) throw new RangeError('Input should be a positive integer');
  }

  public execute (): number {
    if ([1, 2].includes(this.n)) return 1
 
    return new Fibonacci(this.n - 1).execute() + new Fibonacci(this.n - 2).execute() 
  }
}
