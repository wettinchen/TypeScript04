// functions

const logMsg = (message: any): void => {
    console.log(message)
}

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))
