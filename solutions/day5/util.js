import fs from "node:fs";

export function getSanitizedInput(){
    const rules = fs.readFileSync('/Users/jantemmerman/Documents/wotz/advent-of-code-24/inputs/5.txt', 'utf8')
    if (!rules) {
        console.error('No data found');
        return;
    }

    const updates = fs.readFileSync('/Users/jantemmerman/Documents/wotz/advent-of-code-24/inputs/5.1.txt', 'utf8')
    if (!updates) {
        console.error('No data found');
        return;
    }

    return [rules.split('\n').map(row => row.split('|')), updates.split('\n').map(row => row.split(','))];
}