const logMsg = (message: any): void => {
    console.log(message)
}

// never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string"
    if (typeof value === "number") return "number"
    return createError("This should never happen!")
}