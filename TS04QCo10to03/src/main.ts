// optional parameter
const addAll = (a: number, b:number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c
    }
    return a + b
}