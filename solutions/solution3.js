const solution3 = (word) => {
    const isAlphabet = (value) => {
        if ((value >= "a" && value <= "z") || (value >= "A" && value <= "Z")) {
            return true;
        }
        return false;
    };

    // Get number of characters in text
    const n = word.length;
    // Before replace text
    let low = 0;
    let high = n - 1;
    let first = "";
    let last = "";
    let result = ""
    while (low < high) {
        if (isAlphabet(word[low]) && isAlphabet(word[high])) {
            // Both char is Alphabet
            first = first + word[high];
            last = word[low] + last;
            low++;
            high--;
        } else {
            if (!isAlphabet(word[low])) {
                first = first + word[low];
                low++;
            }
            if (!isAlphabet(word[high])) {
                last = word[high] + last;
                high--;
            }
        }
    }
    result = first + last;

    return result;
};

module.exports = { solution3 };

// created by: https://kalkicode.com/reverse-string-without-affecting-special-characters