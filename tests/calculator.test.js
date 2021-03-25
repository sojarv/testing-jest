import calculator from '../code/calculator'

test('addition numbers', () => {
    expect(calculator.add(2, 2)).toBe(4)
})

test('addition strings', () => {
    expect(calculator.add('test', 'other test')).toBe('testother test')
})

test('subtraction', () => {
    expect(calculator.subtract(2, 2)).toBe(0)
})

test('divide', () => {
    expect(calculator.divide(2, 2)).toBe(1)
})


test('multiplication', () => {
    expect(calculator.multiply(2, 2)).toBe(4)
})