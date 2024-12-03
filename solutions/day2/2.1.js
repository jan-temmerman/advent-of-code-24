import {getSanitizedInput} from "./util.js";

const inputArr = getSanitizedInput();

function checkRow(row, increasing, problemDampened, acc) {
    const dampenProblem = (i, pD) => {
        return Math.max(
            checkRow(row.slice(i), increasing, pD, acc),
            checkRow(row.slice(i + 1), increasing, pD, acc)
        );
    }

    const tryProblemDampener = (i, pD) => {
        if (!pD) {
            pD = true;
            acc = dampenProblem(i, pD);
        }
    }

    row.some((v, i) => {
        if ( 1 <= row[i + 1] - v && row[i + 1] - v <= 3) {
            // Increasing
            // If previous value was decreasing, we have an invalid row, so early exit
            if (i >= 1 && !increasing) {
                tryProblemDampener(i, problemDampened);
                return true;
            }
            // If we are at the end of the row, we have a valid row
            if (i === row.length - 2) {
                acc++;
                return true;
            }
            increasing = true;
        } else if ( -3 <= row[i + 1] - v && row[i + 1] - v <= -1) {
            // Decreasing
            // If previous value was increasing, we have an invalid row, so early exit
            if (i >= 1 && increasing) {
                tryProblemDampener(i, problemDampened);
                return true;
            }
            // If we are at the end of the row, we have a valid row
            if (i === row.length - 2) {
                acc++;
                return true;
            }
            increasing = false;
        } else {
            // Out of desired range
            tryProblemDampener(i, problemDampened);
            return true;
        }
    });
    return acc;
}

// Count the amount of rows of which the values in- or decrease by min 1 and max 3
const safeRows = inputArr.reduce((acc, row) => {
    let increasing = false;
    let problemDampened = false;

    acc = checkRow(row, increasing, problemDampened, acc);

    return acc;
}, 0);

console.log(safeRows);
