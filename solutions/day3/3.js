import {getSanitizedInput} from "./util.js";

const input = getSanitizedInput();
const inputArr = input.match(/([m][u][l][(]\d{1,3}[,]\d{1,3}[)])/g);
inputArr.map((v, i) => {
    inputArr[i] = v.match(/\d{1,3}/g).map(Number);
})

const sum = inputArr.reduce((acc, pair) => {
    acc += pair[0] * pair[1];
    return acc;
}, 0);

console.log(sum);
