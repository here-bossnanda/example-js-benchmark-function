// const checkPattern = (letter) => /^[a-z0-9]+$/i.test(letter);

const checkPattern = (value) => {
  if ((value >= "a" && value <= "z") || (value >= "A" && value <= "Z")) {
    return true;
  }
  return false;
};

const start = (input, left, right, result) => {
  if (left === right) {
    result[left] = input[left];
    return result;
  } else if (left > right) {
    return result;
  }

  if (checkPattern(input[left])) {
    if (checkPattern(input[right])) {
      result[left] = input[right];
      result[right] = input[left];

      left++;
      right--;
    } else {
      result[right] = input[right];
      right--;
    }
  } else {
    result[left] = input[left];
    left++;
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
