export class SieveOfErastosthenes {
  constructor (
    private readonly limit: number
  ) {}

  public execute(): Array<number> {
    if (this.limit < 2) return []

    const isPrime = Array(this.limit + 1).fill(true)
    isPrime[0] = false
    isPrime[1] = false

    for (let i = 2; i * i <= this.limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= this.limit; j += i) {
          isPrime[j] = false
        }
      }
    }

    return isPrime
      .map((prime, index) => prime ? index : -1)
      .filter(num => num !== -1)
  }
}
