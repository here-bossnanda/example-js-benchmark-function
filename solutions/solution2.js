const solution2 = (word) => {
    let specialChar = "!&.@";
    let result = "";
    let positionLastChar = word.length - 1;

    const checkIsSpecialChar = (position) => {
        for (let i = position; i >= 0; i--) {
            if (specialChar.includes(word[i])) {
                positionLastChar--;
            } else {
                break;
            }
        }
        return;
    };

    for (let i = 0; i < word.length; i++) {
        if (!specialChar.includes(word[positionLastChar]) &&
            !specialChar.includes(word[i])
        ) {
            result += word[positionLastChar];
            positionLastChar--;
        } else if (specialChar.includes(word[i])) {
            result += word[i];
        } else if (specialChar.includes(word[positionLastChar])) {
            checkIsSpecialChar(positionLastChar);
            result += word[positionLastChar];
            positionLastChar--;
        }
    }
    return result;
};

module.exports = { solution2 };