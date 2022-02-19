const solution1 = (word) => {
    let specialChar = "!&.@";
    let tempWording = "";
    let result = "";

    // reverse original word and save only alphabetic charachter
    for (let i = word.length - 1; i >= 0; i--) {
        if (!specialChar.includes(word[i])) {
            tempWording += word[i];
        }
    }

    // reindex character
    let tempLocation = 0;
    for (let i = 0; i < word.length; i++) {
        if (specialChar.includes(word[i])) {
            result += word[i];
        } else {
            result += tempWording[tempLocation];
            tempLocation++;
        }
    }

    return result;
};

module.exports = { solution1 };

// created by: https://github.com/here-bossnanda