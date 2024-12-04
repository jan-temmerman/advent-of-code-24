import {getSanitizedInput} from "./util.js";

const inputArr = getSanitizedInput();

let counter = 0;
inputArr.forEach((row, y) => {
    row.forEach((v, x) => {
        if (v === 'X') {
            const matrix = [[], [], [], [], [], [], []];
            const words = [];

            // Build matrix around X
            for(let y2 = 0; y2 < 7; y2++) {
                const rowExists = inputArr[y-3+y2];
                for(let x2 = 0; x2 < 7; x2++) {
                    matrix[y2][x2] = rowExists ? inputArr[y-3+y2][x-3+x2] : null;
                }
            }

            // Add possible words to array
            // horizontal
            words.push(matrix[3][3] + matrix[3][4] + matrix[3][5] + matrix[3][6])
            words.push(matrix[3][3] + matrix[3][2] + matrix[3][1] + matrix[3][0])

            // vertical
            words.push(matrix[3][3] + matrix[2][3] + matrix[1][3] + matrix[0][3])
            words.push(matrix[3][3] + matrix[4][3] + matrix[5][3] + matrix[6][3])

            // diagonally
            words.push(matrix[3][3] + matrix[2][2] + matrix[1][1] + matrix[0][0])
            words.push(matrix[3][3] + matrix[2][4] + matrix[1][5] + matrix[0][6])
            words.push(matrix[3][3] + matrix[4][4] + matrix[5][5] + matrix[6][6])
            words.push(matrix[3][3] + matrix[4][2] + matrix[5][1] + matrix[6][0])

            counter += words.filter(v => v === "XMAS").length
        }
    })
})


console.log(counter)