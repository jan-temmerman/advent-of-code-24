import {getSanitizedInput} from "./util.js";

const inputArr = getSanitizedInput();

let counter = 0;
inputArr.forEach((row, y) => {
    row.forEach((v, x) => {
        if (v === 'A') {
            const matrix = [[], [], []];
            const words = [];

            // Build matrix around X
            for(let y2 = 0; y2 < 3; y2++) {
                const rowExists = inputArr[y-1+y2];
                for(let x2 = 0; x2 < 3; x2++) {
                    matrix[y2][x2] = rowExists ? inputArr[y-1+y2][x-1+x2] : null;
                }
            }


            // Add possible words to array
            // diagonally
            words.push(matrix[0][0] + matrix[1][1] + matrix[2][2])
            words.push(matrix[2][2] + matrix[1][1] + matrix[0][0])
            words.push(matrix[2][0] + matrix[1][1] + matrix[0][2])
            words.push(matrix[0][2] + matrix[1][1] + matrix[2][0])

            counter += words.filter(v => v === "MAS").length === 2 ? 1 : 0
        }
    })
})


console.log(counter)