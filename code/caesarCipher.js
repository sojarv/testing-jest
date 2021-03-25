const caesarCipher = (word, key) => {

    if (key > 26 || key < -26) {
        return 'Key should be between -26 and 26'
    }

    let splitWord = word.split('')
        //console.log(splitWord)
    let codes = splitWord.map((c) => (check(c.charCodeAt(0), key)))
    let backToChar = codes.map((code) => String.fromCharCode(code))
        //console.log(codes)
        //console.log(backToChar)
    return backToChar.join('')
}

const check = (char, key) => {
        if (char <= 90 && char >= 65) {

            if (char + key > 90) {
                return char + key - 26
            } else if (char + key < 65) {
                return char + key + 26
            } else return char + key
        } else if (char >= 97 && char <= 122) {
            if (char + key > 122) {
                return char + key - 26
            } else if (char + key < 97) {

                return char + key + 26
            } else return char + key
        } else {
            return 32
        }

    }
    //caesarCipher('Example text With More ThaN onE Letter', 0)
export default caesarCipher