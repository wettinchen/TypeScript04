// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello!")
logMsg(add(2, 3))