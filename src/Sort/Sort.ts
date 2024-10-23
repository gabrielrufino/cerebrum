export abstract class Sort {
  constructor(
    protected readonly numbers: Array<number>
  ) {}

  public abstract execute(): Array<number> 
}
