import { describe, it, expect } from 'vitest'
import { LinearRegression } from './LinearRegression'

describe('LinearRegression', () => {
  it('should calculate correct slope and intercept for basic input', () => {
    const values = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 7 },
      { x: 5, y: 11 },
    ]

    const regression = new LinearRegression(values)
      .calculate()

    expect(regression.slope).toBeCloseTo(2.2)
    expect(regression.intercept).toBeCloseTo(-1)
  })

  it('should predict the correct value after regression calculation', () => {
    const values = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 7 },
      { x: 5, y: 11 },
    ]
    
    const regression = new LinearRegression(values)
      .calculate()

    const prediction = regression.predict(6)
    console.log({ prediction })
    expect(prediction).toBeCloseTo(12.2)
  })

  it('should throw error when trying to predict without calculating regression', () => {
    const values = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
    ]
    
    const regression = new LinearRegression(values)
    
    expect(() => regression.predict(6)).toThrow('You need to calculate the regression before making predictions.')
  })

  it('should throw error if values array is empty', () => {
    expect(() => new LinearRegression([])).toThrow('The input data must not be empty.')
  })
})
