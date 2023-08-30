const logMsg = (message: any): void => {
    console.log(message)
}

// never type
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}