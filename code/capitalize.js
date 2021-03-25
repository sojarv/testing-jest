const capitalize = (s) => {
    if (typeof s != 'string') {
        return 'Not a string'
    } else {
        return s[0].toUpperCase() + s.slice(1);
    }
}

export default capitalize;