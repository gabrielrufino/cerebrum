export class Factorial {
  constructor (private readonly n: number) {
    if (n < 0) throw new RangeError('Input should be a non-negative integer');
  }

  public execute (): number {
    if ([0, 1].includes(this.n)) return 1

    return this.n * new Factorial(this.n - 1).execute()
  }
}
