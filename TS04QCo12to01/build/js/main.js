"use strict";
const logMsg = (message) => {
    console.log(message);
};
// rest parameters
const total = (...numbers) => {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
};
logMsg(total(1, 2, 3, 4));
