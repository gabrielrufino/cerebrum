import { Search } from './Search'

export class LinearSearch extends Search {
  public execute (): number | null {
    this.beforeExecute()

    for (let i = 0; i < this.elements!.length; i++) {
      if (this.elements![i] === this.target) {
        return i
      }
    }

    return null
  }
}
