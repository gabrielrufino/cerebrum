export class Tokenizer {
  constructor (
    private text: string = '',
    private ignore: string[] = []
  ) {}

  public setText(text: string): this {
    this.text = text
    return this
  }

  public setIgnore(ignore: string[]): this {
    this.ignore = ignore
    return this
  }

  public execute(): string[] {
    const ignore = this.ignore.map(item => item.toLocaleLowerCase())
    const punctuation = /[.,;:!?"]/g

    return this.text
      .replace(punctuation, '')
      .split(/\s+/)
      .filter(token => token && !ignore.includes(token.toLocaleLowerCase()))
  }
}
