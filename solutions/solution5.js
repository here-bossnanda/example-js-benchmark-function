const solution5 = (word) => {
    let tempWording = "";
    let result = "";

    const isAlphabet = (value) => {
        if ((value >= "a" && value <= "z") || (value >= "A" && value <= "Z")) {
            return true;
        }
        return false;
    };

    // reverse original word and save only alphabetic charachter
    for (let i = word.length - 1; i >= 0; i--) {
        if (isAlphabet(word[i])) {
            tempWording += word[i];
        }
    }

    // reindex character
    let tempLocation = 0;
    for (let i = 0; i < word.length; i++) {
        if (!isAlphabet(word[i])) {
            result += word[i];
        } else {
            result += tempWording[tempLocation];
            tempLocation++;
        }
    }

    return result;
};

module.exports = { solution5 };

// created by: https://github.com/here-bossnanda