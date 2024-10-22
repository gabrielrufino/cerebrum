export abstract class Search {
  constructor (
    protected elements?: Array<number>,
    protected target?: number
  ) {}

  protected beforeExecute () {
    if (!this.elements) {
      throw new Error('Elements should be defined')
    }

    if (this.target === undefined || this.target === null) {
      throw new Error('Target should be defined')
    }
  }

  public setElements (elements: Array<number>) {
    this.elements = elements
    return this
  }

  public setTarget (target: number) {
    this.target = target
    return this
  }

  public abstract execute(): number | null
}
