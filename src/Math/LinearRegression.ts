export class LinearRegression {
  private _slope: number | null = null
  private _intercept: number | null = null

  constructor (private readonly values: Array<{ x: number, y: number }>) {
    if (values.length === 0) {
      throw new Error('The input data must not be empty.');
    }

    return this
  }

  public calculate () {
    const length = this.values.length

    const sumX = this.values.reduce((acc, curr) => acc + curr.x, 0)
    const sumY = this.values.reduce((acc, curr) => acc + curr.y, 0)
    const sumXY = this.values.reduce((acc, curr) => acc + curr.x * curr.y, 0)
    const sumXSquare = this.values.reduce((acc, curr) => acc + Math.pow(curr.x, 2), 0)
    
    const denominator = length * sumXSquare - sumX * sumX;

    if (denominator === 0) {
      throw new Error('The input data points are collinear or insufficient for regression.');
    }

    this._slope = (length * sumXY - sumX * sumY) / denominator

    this._intercept = (sumY * sumXSquare - sumX * sumXY) / denominator

    return this
  }

  public predict(x: number): number {
    if (this._slope === null || this._intercept === null) {
      throw new Error('You need to calculate the regression before making predictions.')
    }

    return this._slope * x + this._intercept
  }

  get slope(): number | null {
    return this._slope
  }

  get intercept(): number | null {
    return this._intercept
  }
}
