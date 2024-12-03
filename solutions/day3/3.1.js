import {getSanitizedInput} from "./util.js";

const input = getSanitizedInput();
const inputArr = input.match(/([m][u][l][(]\d{1,3}[,]\d{1,3}[)])|([d][o][(][)])|([d][o][n]['][t][(][)])/g);

inputArr.map((v, i) => {
    inputArr[i] = v.match(/\d{1,3}/g) ? v.match(/\d{1,3}/g).map(Number) : v;
})

let enabled = true;
const sum = inputArr.reduce((acc, pair) => {
    if (pair === "don't()") {
        enabled = false;
        return acc;
    }
    if (pair === "do()") {
        enabled = true;
        return acc
    }

    if (enabled)
    acc += pair[0] * pair[1];
    return acc;
}, 0);

console.log(sum);
