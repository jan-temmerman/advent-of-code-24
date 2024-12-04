import fs from "node:fs";

export function getSanitizedInput(){
    const data = fs.readFileSync('/Users/jantemmerman/Documents/wotz/advent-of-code-24/inputs/4.txt', 'utf8')
    if (!data) {
        console.error('No data found');
        return;
    }

    return data.split('\n').map(row => row.split(''));
}