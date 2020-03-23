let args = process.argv.slice(2)

const [operator, ...number] = args

const sum = (...numbers) => {
    let arrayOfNums = numbers.map(number => Number(number))
    return arrayOfNums.reduce((acc, num) => acc += num)
}

const avg = (...numbers) => {
    return sum(...numbers) / numbers.length
}

(() => {
    if (operator === 'sum') {
        console.log(sum(...number));
    } else if (operator === 'avg') {
        console.log(avg(...number));
    }
})()

// Example 1: node index.js sum 1 2 3 => 6
// Example 2: node index.js avg 1 2 3 => 2