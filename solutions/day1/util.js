import fs from "node:fs";
import _ from "lodash/collection.js";

export function getSanitizedInput(){
    const data = fs.readFileSync('/Users/jantemmerman/Documents/wotz/advent-of-code-24/inputs/1.txt', 'utf8')
    if (!data) {
        console.error('No data found');
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

    return [col1, col2];
}