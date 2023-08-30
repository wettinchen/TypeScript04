const logMsg = (message: any): void => {
    console.log(message)
}

// never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
    }
}