const logMsg = (message: any): void => {
    console.log(message)
}

// optional parameter
const addAll = (a: number, b:number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number, b:number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))