import caesarCipher from '../code/caesarCipher';

test('lowercase letters', () => {
    expect(caesarCipher('test', 1)).toBe('uftu')
});

test('uppercase letters', () => {
    expect(caesarCipher('TEST', 1)).toBe('UFTU')
});

test('mix with positive number going above', () => {
    expect((caesarCipher('Example text With More ThaN onE Letter', 14))).toBe('Sloadzs hslh Kwhv Acfs HvoB cbS Zshhsf')
})

test('mix with negative number going below', () => {
    expect(caesarCipher('Example text With More ThaN onE Letter', -16)).toBe('Ohkwzvo dohd Gsdr Wybo DrkX yxO Voddob')
})

test('key more than 26', () => {
    expect(caesarCipher('sample', 27)).toBe('Key should be between -26 and 26')
})

test('key less than -26', () => {
    expect(caesarCipher('sample', -27)).toBe('Key should be between -26 and 26')
})