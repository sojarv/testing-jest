import capitalize from '../code/capitalize'

test('one word to be right', () => {
    expect(capitalize('test')).toBe('Test')
});

test('whole sentence', () => {
    expect(capitalize('whole sentence example')).toBe('Whole sentence example')
})

test('number', () => {
    expect(capitalize(3)).toBe('Not a string')
})