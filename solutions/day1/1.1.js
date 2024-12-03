import {getSanitizedInput} from "./util.js";

const [col1, col2] = getSanitizedInput();

// Calculate the sum of the products of every value from col1 and the amount of times it occurs in col2
const result = col1.reduce((acc, v1, i) => {
    const multiplier = col2.filter(v2 => v2 === v1).length
    acc+= v1*multiplier;
    return acc;
}, 0);

console.log(result);