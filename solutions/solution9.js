const solution9 = (sentence) => {
    let reversing = "";
    const pattern = /^[a-z0-9]+$/i;
    let objectSpecialChar = {};

    for (let i = 0; i < sentence.length; i++) {
        if (pattern.test(sentence[i])) {
            reversing = sentence[i] += reversing
        } else {
            objectSpecialChar[i] = sentence[i];
        }
    }

    let newarr = reversing.split("");

    const keys = Object.keys(objectSpecialChar);

    keys.forEach((key, index) => {
        newarr.splice(key, 0, objectSpecialChar[key]);
    });

    return newarr.join("");
};

module.exports = { solution9 }

// created by: jonathan