import reverseString from '../code/reverseString'

test('one word test', () => {
    expect(reverseString('test')).toBe('tset')
})

test('whole sentence', () => {
    expect(reverseString('Test sentence.')).toBe('.ecnetnes tseT')
})

test('not a string', () => {
    expect(reverseString(2)).toBe('Not a string')
})