import {getSanitizedInput} from "./util.js";

const [rules, updates] = getSanitizedInput();
console.log(updates)

const output = updates.reduce((sum, update, index) => {
    const updatecopy = [...update]
    let validUpdate = true;
    let fixedOrder = false;
    for (let i = 0; i < update.length; i++) {
        const testcase = true//index < 20 && update[i] === '16';
        if (i < update.length - 1) {
            validUpdate = rules.filter(rule => rule[0] === update[i]).some(rule => rule[1] === update[i + 1]);
            if (!validUpdate) {
                if (i === 0) {
                    const restOfUpdate = update.slice(1);
                    const possibilities = rules.map(rule => rule[1]);
                    const matchIndex = restOfUpdate.findIndex(char => possibilities.includes(char));
                    if (testcase) {
                        console.log('update: ', update)
                        console.log('rest: ', restOfUpdate)
                        console.log('possibilities: ', possibilities)
                        console.log('matchindex: ', matchIndex);
                    }
                    if (matchIndex >= 0) {
                        const match = update[matchIndex + 1];
                        if (testcase) {
                            console.log('match: ', match)
                            console.log('value to replace: ', update[i+1])
                        }
                        update[matchIndex + 1] = update[i+1];
                        update[i+1] = match;
                        fixedOrder = true;
                        if (testcase) {
                            console.log('result update: ', update)
                        }
                    }
                } else {
                    const possibleRules = rules.filter(rule => rule[0] === update[i])

                    if (possibleRules.length > 0) {
                        const restOfUpdate = update.slice(i+1);
                        const possibilities = possibleRules.map(rule => rule[1]);
                        const matchIndex = restOfUpdate.findIndex(char => possibilities.includes(char));
                        if (testcase) {
                            console.log('update: ', update)
                            console.log('rest: ', restOfUpdate)
                            console.log('possibilities: ', possibilities)
                            console.log('matchindex: ', matchIndex);
                        }
                        if (matchIndex >= 0) {
                            const match = update[matchIndex+i+1];
                            if (testcase) {
                                console.log('match: ', match)
                                console.log('value to replace: ', update[i+1])
                            }
                            update[matchIndex+i+1] = update[i+1];
                            update[i+1] = match;
                            fixedOrder = true;
                            if (testcase) {
                                console.log('result update: ', update)
                            }
                        }
                    } else break;
                }
            }
        }
    }
    if (validUpdate && fixedOrder) {
        if (index < 20) {
            console.log('update: ',updatecopy)
            console.log('result: ', update)
            console.log('middle value: ', Number(update[(update.length - 1) / 2]))
        }
        sum+= Number(update[(update.length - 1) / 2])
        return sum;
    }
    else return sum;
}, 0)

console.log(output)