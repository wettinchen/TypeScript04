const logMsg = (message: any): void => {
    console.log(message)
}

// rest parameters
const total = (...numbers: number[]): number => {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue)
}

logMsg(total(1, 2, 3, 4))