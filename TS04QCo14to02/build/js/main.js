"use strict";
const logMsg = (message) => {
    console.log(message);
};
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happen!");
};
