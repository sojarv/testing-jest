const arrayAnalysis = (arr) => {
    let average = arr.reduce((a, acc) => a + acc, 0) / arr.length
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let length = arr.length
        //console.log(average, max, min, length)
    return {
        average: average,
        max: max,
        min: min,
        length: length
    }
}

export default arrayAnalysis