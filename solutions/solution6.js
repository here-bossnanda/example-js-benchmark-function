const solution6 = (word) => {
    let positionLow = 0
    let positionLastChar = word.length - 1;
    let first = "";
    let last = "";

    const isAlphabet = (value) => {
        if ((value >= "a" && value <= "z") || (value >= "A" && value <= "Z")) {
            return true;
        }
        return false;
    };

    if (word.length % 2 == 0) {
        while (positionLow < positionLastChar) {
            if (
                isAlphabet(word[positionLastChar]) &&
                isAlphabet(word[positionLow])
            ) {
                first += word[positionLastChar];
                last = word[positionLow] + last;
                positionLastChar--;
                positionLow++;
            } else if (!isAlphabet(word[positionLow])) {
                first += word[positionLow];
                positionLow++;
            } else if (!isAlphabet(word[positionLastChar])) {
                last = word[positionLastChar] + last;
                positionLastChar--;

                first += word[positionLastChar];
                positionLastChar--;
            }
        }
    } else {
        while (positionLow < positionLastChar) {
            if (
                isAlphabet(word[positionLastChar]) &&
                isAlphabet(word[positionLow])
            ) {
                first += word[positionLastChar];
                last = word[positionLow] + last;
                positionLastChar--;
                positionLow++;
            } else if (!isAlphabet(word[positionLow])) {
                first += word[positionLow];
                last = word[positionLastChar] + last;
                positionLow++;
            } else if (!isAlphabet(word[positionLastChar])) {
                last = word[positionLow] + word[positionLastChar] + last;
                positionLastChar--;

                first += word[positionLastChar];
                positionLastChar--;
                positionLow++;
            }
        }
    }

    first += last;

    return first;
};

module.exports = { solution6 };

// created by: marcel