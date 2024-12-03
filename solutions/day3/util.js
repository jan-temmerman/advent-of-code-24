import fs from "node:fs";

export function getSanitizedInput(){
    const data = fs.readFileSync('/Users/jantemmerman/Documents/wotz/advent-of-code-24/inputs/3.txt', 'utf8')
    if (!data) {
        console.error('No data found');
        return;
    }

    return data
}