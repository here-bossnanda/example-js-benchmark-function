const solution4 = (word) => {
    let result = "";
    let positionLastChar = word.length - 1;

    const checkIsSpecialChar = (position) => {
        for (let i = position; i >= 0; i--) {
            if (!isAlphabet(word[i])) {
                positionLastChar--;
            } else {
                break;
            }
        }
        return;
    };

    const isAlphabet = (value) => {
        if ((value >= "a" && value <= "z") || (value >= "A" && value <= "Z")) {
            return true;
        }
        return false;
    };

    for (let i = 0; i < word.length; i++) {
        if (isAlphabet(word[positionLastChar]) && isAlphabet(word[i])) {
            result += word[positionLastChar];
            positionLastChar--;
        } else if (!isAlphabet(word[i])) {
            result += word[i];
        } else if (!isAlphabet(word[positionLastChar])) {
            checkIsSpecialChar(positionLastChar);
            result += word[positionLastChar];
            positionLastChar--;
        }
    }
    return result;
};

module.exports = { solution4 };