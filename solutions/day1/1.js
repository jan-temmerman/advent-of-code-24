import {getSanitizedInput} from "./util.js";

const [col1, col2] = getSanitizedInput();

// Calculate the absolute difference between the 2 columns and sum them
const result = col1.reduce((acc, v1, i) => {
    acc+= Math.abs(col2[i] - v1);
    return acc;
}, 0);

console.log(result);