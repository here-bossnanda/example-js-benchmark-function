function solution7(input) {
    const pattern = /^[a-z0-9]+$/i;
    let charLength = input.length - 1;
    let result = [];

    for (let i = 0; i <= charLength; i++) {
        if (pattern.test(input[i]) && pattern.test(input[charLength])) {
            result[i] = input[charLength];
            result[charLength] = input[i];
            charLength--;
        } else if (!pattern.test(input[i]) && !pattern.test(input[charLength])) {
            result[i] = input[charLength];
            result[charLength] = input[i];
            charLength--;
        } else if (!pattern.test(input[i])) {
            result[i] = input[i];
        } else if (!pattern.test(input[charLength])) {
            result[charLength] = input[charLength];
            charLength--;

            result[charLength] = input[i];
            result[i] = input[charLength];
            charLength--;
        }
    }

    return result.join("");
}

module.exports = { solution7 }

// created by: https://github.com/marksterben