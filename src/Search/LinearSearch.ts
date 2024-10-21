export class LinearSearch {
  constructor (
    private elements?: Array<number>,
    private target?: number,
  ) {}

  public setElements (elements: Array<number>) {
    this.elements = elements
    return this
  }

  public setTarget (target: number) {
    this.target = target
    return this
  }

  public execute (): number | null {
    if (!this.elements) {
      throw new Error('Elements should be defined')
    }

    if (this.target === undefined || this.target === null) {
      throw new Error('Target should be defined')
    }

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] === this.target) {
        return i
      }
    }

    return null
  }
}
