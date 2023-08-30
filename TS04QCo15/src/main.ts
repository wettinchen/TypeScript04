const logMsg = (message: any): void => {
    console.log(message)
}

// never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number"
        ? true
        : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string"
    if (isNumber(value)) return "number"
    return createError("This should never happen!")
}