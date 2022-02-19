const checkPattern = (letter) => /^[a-z0-9]+$/i.test(letter);

const start = (input, left, right, result) => {
    if (left === right) {
        result[left] = input[left];
        return result;
    }

    if (left > right) {
        return result;
    }

    if (checkPattern(input[left]) && checkPattern(input[right])) {
        result[left] = input[right];
        result[right] = input[left];

        left++;
        right--;
    } else {
        if (!checkPattern(input[left])) {
            result[left] = input[left];
            left++;
        }

        if (!checkPattern(input[right])) {
            result[right] = input[right];
            right--;
        }
    }

    return start(input, left, right, result);
};

function solution8(input) {
    let left = 0;
    let right = input.length - 1;

    let result = [];

    return start(input, left, right, result).join("");
}

module.exports = { solution8 };

// created by: https://github.com/marksterben