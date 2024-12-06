import {getSanitizedInput} from "./util.js";
import _ from "lodash";

const [rules, updates] = getSanitizedInput();

const output = updates.reduce((sum, update, index) => {
    let validUpdate = true
    let fixed = false;
    for (let i = 0; i < update.length; i++) {
        if (i < update.length - 1) {
            validUpdate = rules.filter(rule => rule[0] === update[i]).some(rule => rule[1] === update[i + 1]);
        }
        if (!validUpdate) {
            const possibleRules = rules.filter(rule => rule.includes(update[i]));
            const [prefixRules, suffixRules] = _.partition(possibleRules, rule => rule[0] === update[i]);
            const [currentChar] = update.splice(i, 1)
            const prefixMatchIndex = update.findIndex(char => prefixRules.some(rule => rule[1] === char));
            const suffixMatchIndex = update.findIndex(char => suffixRules.filter(rule => rule[0] !== update[i-1]).some(rule => rule[0] === char));
            //console.log(update, currentChar, update[i], prefixRules, suffixRules, prefixMatchIndex, suffixMatchIndex)
            if (prefixMatchIndex !== -1) {
                update.splice(prefixMatchIndex, 0, currentChar)
                fixed = true
                validUpdate = true;
            } else if (suffixMatchIndex !== -1) {
                update.splice(suffixMatchIndex + 1, 0, currentChar)
                fixed = true;
                validUpdate = true;
            } else break;
        }
    }
    if (validUpdate && fixed) {
        console.log(update)
        sum+= Number(update[(update.length - 1) / 2])
        return sum;
    }
    else return sum;
}, 0)

console.log(output)