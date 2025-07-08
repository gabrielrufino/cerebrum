export class GroupBy<T extends Record<string, any>> {
  constructor(
    private readonly items: Array<T>,
    private readonly key: keyof T,
  ) {}

  public execute(): Record<string, Array<T>> {
    return this.items.reduce((accumulator, item) => {
      const group = item[this.key]
      if (!accumulator[group]) {
        accumulator[group] = []
      }
      accumulator[group].push(item)
      return accumulator
    }, {} as Record<string, Array<T>>)
  }
}
