const solution6 = (word) => {
    let positionLastChar = word.length - 1;
    let first = "";
    let last = "";

    const isAlphabet = (value) => {
        if ((value >= "a" && value <= "z") || (value >= "A" && value <= "Z")) {
            return true;
        }
        return false;
    };

    for (let i = 0; i < positionLastChar; i++) {
        if (isAlphabet(word[positionLastChar]) && isAlphabet(word[i])) {
            first = first + word[positionLastChar];
            last = word[i] + last;
            positionLastChar--;
        } else if (!isAlphabet(word[i])) {
            first += word[i];
        } else if (!isAlphabet(word[positionLastChar])) {
            word[positionLastChar] += last;
            positionLastChar--;
        }
    }
    first += last;

    return first;
};

module.exports = { solution6 };