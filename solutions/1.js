import fs from 'node:fs';
import _ from "lodash/collection.js";

fs.readFile('/Users/jantemmerman/Documents/wotz/advent-of-code-24/inputs/1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Get 1 big array with all the values
    const inputArr = data.split('\n').flatMap(i => i.split('   '));

    // Split the array in 2 columns
    let index = 0
    const [col1, col2] = _.partition(inputArr, () => index++ % 2 === 0);

    // Sort the columns from low to high
    col1.sort((a, b) => a - b);
    col2.sort((a, b) => a - b);

    // Calculate the absolute difference between the 2 columns and sum them
    const result = col1.reduce((acc, v1, i) => {
        console.log(col2[i] - v1)
        acc+= Math.abs(col2[i] - v1);
        return acc;
    }, 0);

    console.log(result);
});