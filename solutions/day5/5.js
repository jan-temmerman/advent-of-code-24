import {getSanitizedInput} from "./util.js";

const [rules, updates] = getSanitizedInput();

const output = updates.reduce((sum, update, index) => {
    let validUpdate = true
    for (let i = 0; i < update.length; i++) {
        if (i < update.length - 1) {
            validUpdate = rules.filter(rule => rule[0] === update[i]).some(rule => rule[1] === update[i + 1]);
            if (!validUpdate) break;
        }
    }
    if (validUpdate) {
        sum+= Number(update[(update.length - 1) / 2])
        return sum;
    }
    else return sum;
}, 0)

console.log(output)