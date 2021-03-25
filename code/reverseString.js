const reverseString = (s) => {
    if (typeof s !== 'string') {
        return 'Not a string';
    } else {
        return s.split('').reverse().join('')
    }
}

export default reverseString;