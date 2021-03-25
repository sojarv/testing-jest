import arrayAnalysis from '../code/arrayAnalysis'


test('list with positive numbers', () => {
    expect(arrayAnalysis([1, 3, 4, 5, 6])).toStrictEqual({ average: 3.8, max: 6, min: 1, length: 5 })
})

test('list with floats and negative and positive', () => {
    expect(arrayAnalysis([-13, 32, 4234, 4, 1.32])).toStrictEqual({ average: 851.664, max: 4234, min: -13, length: 5 })
})

test('list with negative numbers', () => {
    expect(arrayAnalysis([-1, -3, -4, -5, -6])).toStrictEqual({ average: -3.8, max: -1, min: -6, length: 5 })
})

test('empty list', () => {
    expect(arrayAnalysis([])).toStrictEqual({ average: NaN, max: -Infinity, min: Infinity, length: 0 })
})

test('list with one number', () => {
    expect(arrayAnalysis([5])).toStrictEqual({ average: 5, max: 5, min: 5, length: 1 })
})